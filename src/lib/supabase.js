import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://uqpdnylqlnnifwmziyer.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxcGRueWxxbG5uaWZ3bXppeWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MzgwOTgsImV4cCI6MjA4ODMxNDA5OH0.ttsDjRn8OPEZC_F3Hew_3rv-aCTjvRJpeTdtmTIfUKI'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
