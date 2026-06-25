const {
  default: makeWASocket,
  useMultiFileAuthState
} = require("@whiskeysockets/baileys");

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("session");

  const sock = makeWASocket({
    auth: state
  });

  sock.ev.on("creds.update", saveCreds);

  // Welcome & Goodbye
  sock.ev.on("group-participants.update", async (data) => {
    try {
      if (data.action === "add") {
        await sock.sendMessage(data.id, {
          text: "👋 Welcome to the group!"
        });
      }

      if (data.action === "remove") {
        await sock.sendMessage(data.id, {
          text: "😔 Goodbye!"
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

  // Messages
  sock.ev.on("messages.upsert", async ({ messages }) => {
    try {
      const msg = messages[0];
      if (!msg.message) return;

      const from = msg.key.remoteJid;

      const text =
        msg.message.conversation ||
        msg.message.extendedTextMessage?.text ||
        "";

      // Auto Reaction
      await sock.sendMessage(from, {
        react: {
          text: "❤️",
          key: msg.key
        }
      });

      // Hi
      if (text.toLowerCase() === "hi") {
        await sock.sendMessage(from, {
          text: "👋 Assalam-o-Alaikum! Welcome to Khursheed Bot."
        });
      }

      // Menu
      if (text === "!menu") {
        await sock.sendMessage(from, {
          text: `🤖 KHURSHEED BOT

📋 Commands

!menu
!ping
owner`
        });
      }

      // Ping
      if (text === "!ping") {
        await sock.sendMessage(from, {
          text: "🏓 Pong!"
        });
      }

      // Owner
      if (text.toLowerCase() === "owner") {
        await sock.sendMessage(from, {
          text: "👑 Owner: Khursheed"
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

  sock.ev.on("connection.update", ({ connection }) => {
    if (connection === "open") {
      console.log("✅ Bot Connected");
    }
  });
}

startBot();
