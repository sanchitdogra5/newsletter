import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://jypqsrruvvlmmvmqttli.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5cHFzcnJ1dnZsbW12bXF0dGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MTAwNDEsImV4cCI6MjA2NTQ4NjA0MX0.DvwMxCTP66JSzu3LW3DpoHcXtJUoNkj9L1_JSTTo9QE';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function submitEmail(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    const { data, error } = await supabase.from('emails').insert([{ email }]);

    if (error) {
        alert('Failed to store email. Please try again.');
        console.error(error);
    } else {
        alert(`Thank you, ${email}! Your email has been stored.`);
        emailInput.value = ''; // Clear the input
    }
}
