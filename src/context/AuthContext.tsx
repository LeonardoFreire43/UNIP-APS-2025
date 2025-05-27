import { createClient } from '@supabase/supabase-js';
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";

const supabaseUrl = "https://cnmhvzimqivjvrhuajnk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNubWh2emltcWl2anZyaHVham5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMjI1MTcsImV4cCI6MjA2Mzc5ODUxN30.rK1WbXB8VKFSYtbGMgYGCpIu4M6yWVcHR5Nu8kTzd7A";
const supabase = createClient(supabaseUrl, supabaseKey);

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Verifica sessão ao carregar e busca nome do perfil
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Pega o display_name do user_metadata
        const displayName = session.user?.user_metadata?.display_name || "";
        setAuthState({ user: { ...session.user, display_name: displayName }, isAuthenticated: true, isLoading: false });
      } else {
        setAuthState({ user: null, isAuthenticated: false, isLoading: false });
      }
    };
    checkSession();
  }, []);

  // Login com Supabase e busca nome do perfil
  const login = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast.error("Credenciais inválidas.");
      throw error;
    } else {
      // Pega o display_name do user_metadata
      const displayName = data.user?.user_metadata?.display_name || "";
      setAuthState({
        user: { ...data.user, display_name: displayName },
        isAuthenticated: true,
        isLoading: false,
      });
      toast.success("Login bem-sucedido!");
    }
  };

  // Registro com Supabase + salva nome no perfil
  const register = async (name: string, email: string, password: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    // Cria usuário no Auth e salva o nome em user_metadata.display_name
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: name }
      }
    });

    if (error) {
      toast.error(error.message);
      throw error;
    } else {
      setAuthState({ user: { ...data.user, display_name: name }, isAuthenticated: true, isLoading: false });
      toast.success("Registro bem-sucedido! Verifique seu e-mail.");
    }
  };

  // Logout
  const logout = async () => {
    await supabase.auth.signOut();
    setAuthState({ user: null, isAuthenticated: false, isLoading: false });
    toast.info("Você saiu da sua conta.");
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};