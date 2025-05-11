
// admin.js
const SUPABASE_URL = "https://gjimnotrnbtkmcbaplag.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqaW1ub3RybmJ0a21jYmFwbGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NDEyOTksImV4cCI6MjA2MjUxNzI5OX0.MrJPnut4TqHJ__JFAkbLo56kjUpm2yeXwOCaYOlPDcs";
const adminSupabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadOrders() {
  const { data: orders, error } = await adminSupabase.from("orders").select("*");
  const tbody = document.querySelector("#orderTable tbody");
  tbody.innerHTML = "";

  orders.forEach(order => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.name}</td>
      <td>${order.phone}</td>
      <td>${order.service}</td>
      <td>${order.mode}</td>
      <td>${order.date}</td>
      <td>${order.time}</td>
      <td>
        <button onclick="deleteOrder('${order.id}')">Delete</button>
      </td>`;
    tbody.appendChild(row);
  });
}

async function deleteOrder(id) {
  await adminSupabase.from("orders").delete().eq("id", id);
  loadOrders();
}

loadOrders();