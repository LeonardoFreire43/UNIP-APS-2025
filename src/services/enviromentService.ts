import { supabase } from '../lib/supabase'; 

export const fetchEnvironmentalData = async (type?: 'air' | 'water' | 'temperature') => {
  let query = supabase
    .from('environmental_data')
    .select('id, type, value, unit, location, status, recorded_at, dia_da_semana')
    .order('recorded_at', { ascending: false });

  if (type) {
    query = query.filter('type', 'eq', type);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  return data;
};

export const searchEnvironmentalData = async (searchQuery: string, dataType?: string, sortBy?: string) => {
  let query = supabase
    .from('environmental_data')
    .select('id, type, value, unit, location, status, recorded_at, dia_da_semana');

  if (searchQuery) {
    query = query.ilike('location', `%${searchQuery}%`);
  }

  if (dataType && dataType !== 'all') {
    query = query.eq('type', dataType);
  }

  if (sortBy === 'location') {
    query = query.order('location', { ascending: true });
  } else if (sortBy === 'value') {
    query = query.order('value', { ascending: false });
  } else if (sortBy === 'status') {
    query = query.order('status', { ascending: true });
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error searching data:', error);
    throw error;
  }

  return data;
};