import supabase from './supabase';

export async function getDesigns() {
  const { data: designs, error } = await supabase.from('designs').select('*');
  console.log(designs);

  if (error) throw new Error('Designs could not be fetched');
  return designs;
}
