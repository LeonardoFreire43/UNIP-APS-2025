import * as React from "react"

// Define o breakpoint para considerar mobile (em pixels)
const MOBILE_BREAKPOINT = 768

// Hook que retorna true se a tela for considerada mobile
export function useIsMobile() {
  // Estado para armazenar se é mobile ou não
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Cria um MediaQueryList para o breakpoint definido
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    // Função chamada quando a largura da tela muda
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    // Adiciona o listener para mudanças na largura da tela
    mql.addEventListener("change", onChange)
    // Define o valor inicial ao montar
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    // Remove o listener ao desmontar o componente
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Retorna true se for mobile, false caso contrário
  return !!isMobile
}
