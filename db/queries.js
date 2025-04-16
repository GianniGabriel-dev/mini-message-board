import { pool } from "./pool.js";

export async function getAllMessages() {
  const [rows] = await pool.query("SELECT * FROM messages ORDER BY created_at DESC");
  return rows;
}

export async function createMessage(sender_name, message) {

  await pool.query("INSERT INTO messages (sender_name, message) VALUES (?, ?)", [sender_name, message]);
}
export async function getMessageById(message_id) {
  const [rows] = await pool.query(
    "SELECT * FROM messages WHERE message_id=?", [message_id]
  );
  return rows.length > 0 ? rows[0] : null; // Devuelve el primer mensaje si existe, o null si no hay resultados
}