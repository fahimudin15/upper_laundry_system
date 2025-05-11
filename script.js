
// script.js
const SUPABASE_URL = "https://gjimnotrnbtkmcbaplag.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqaW1ub3RybmJ0a21jYmFwbGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NDEyOTksImV4cCI6MjA2MjUxNzI5OX0.MrJPnut4TqHJ__JFAkbLo56kjUpm2yeXwOCaYOlPDcs";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const order = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    service: document.getElementById("service").value,
    mode: document.getElementById("mode").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
  };
  const { error } = await supabase.from("orders").insert([order]);
  const msg = document.getElementById("confirmation");
  if (error) {
    msg.textContent = "Error submitting order.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Booking confirmed!";
    msg.style.color = "green";
    document.getElementById("bookingForm").reset();
  }
});

