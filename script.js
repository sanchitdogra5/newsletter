import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const SUPABASE_URL = 'https://jypqsrruvvlmmvmqttli.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5cHFzcnJ1dnZsbW12bXF0dGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MTAwNDEsImV4cCI6MjA2NTQ4NjA0MX0.DvwMxCTP66JSzu3LW3DpoHcXtJUoNkj9L1_JSTTo9QE';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function submitEmail(event) {
    event.preventDefault(); // Prevent form submission reload

    const emailInput = document.querySelector('input[name="EMAIL"]');
    const email = emailInput.value;

    if (!email) {
        alert('Please enter a valid email address.');
        return;
    }

    console.log('Email entered:', email);

    // Insert email into Supabase table
    const { data, error } = await supabase
        .from('emails') // Ensure this matches your Supabase table name
        .insert([{ email }]);

    if (error) {
        console.error('Error inserting data:', error);
        alert('Error saving your email. Please try again.');
    } else {
        console.log('Email saved successfully:', data);
        alert(`Email stored successfully: ${email}`);
        emailInput.value = ''; // Clear input field
    }
}
