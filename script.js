const people = [
    {
        name: "Akshaya",
        message: `Akshaya has probably heard me say “Akshaya, I have one issue…” more times than she would like to remember. 😄
Whenever I got stuck with troubleshooting, she was always there to help me figure things out. A big part of what I learned came from her guidance, and I’m genuinely thankful for that.`
    },

    {
        name: "Pallavi",
        message: `Pallavi has been an important part of my journey here. I appreciate the guidance and support she provided during my time with the team, and I’ll always remember the experiences we shared along the way. Wishing her all the very best for the future.

And Pallavi… not everything can fit in the title — day, date, time, 75% , cal file .. ! 😂`
    },

    {
        name: "Harsh",
        message: `Harsh is honestly one of the best people I’ve worked with. Super chill, easy to talk to, and somehow manages to be a manager without making you feel like you’re talking to a manager. 😄

And then there’s the biker side of him — I’m sure he’d choose a bike ride over a team meeting any day! 😂`
    },

    {
        name: "Manisha",
        message: `Manisha has been a valued part of my journey here. I’ve learned a lot from her during our time working together, and I appreciate the opportunity to have worked with her and the experience we shared as part of the team. Wishing her all the very best and continued success in the future.`
    },

    {
        name: "Lavanya",
        message: `Lavanya is not just a colleague — she’s more like a sister. She’s genuinely one of the nicest people I’ve met here, and having someone like her around made work feel a little less like just work. Definitely going to miss her.`
    },

    {
        name: "Manideep Tavva",
        message: `Manideep is one of those guys who can make even a normal workday unnecessarily funny. 😄
Somehow, he always seems to know people and names that the rest of us have never even heard of. 😂 I still don’t know how he does it.
Always fun to work with, always good conversations, and definitely one of the people who made the team more enjoyable.`
    },

    {
        name: "Pratheesh",
        message: `If there was a serious conversation happening, there was always a good chance we would somehow turn it into something funny. 😂
Lots of laughs, random jokes, and completely unnecessary conversations with him and Manideep — but honestly, those are the things I’ll remember.`
    },

    {
        name: "Bharath",
        message: `Bharath has always been someone who likes to give his best at whatever he does. 😄
There was always a little extra effort to make sure things were done right. 😂
I appreciate the opportunity to have worked with him and wish him all the very best for the future.`
    },

    {
        name: "Moyeed",
        message: `Moyeed is one of the calmest guys around. 😄
Always chill and somehow never seems to be in a hurry about anything.
Working with him was always easy and comfortable, and that’s something I’ll remember.`
    },

    {
        name: "Prabhu",
        message: `Prabhu started with us and then moved into QA, but somehow he never really left the team. 😂
He was still with us, hanging around, and being part of the same journey.`
    },

    {
        name: "Priya",
        message: `Priya is genuinely a very good person and someone who was always nice to have around. We may not have had the most dramatic stories together, but the simple everyday interactions are also part of what I’ll remember from here.`
    },

    {
        name: "Sirisha",
        message: `Sirisha definitely has one of those laughs that you don’t just hear — you know it’s Sirisha. 😂
She’s a fun person, always brings some energy around the team, and was definitely one of the people who made the workplace more lively.`
    },

    {
        name: "Ashwitha",
        message: `Ashwitha left just a few days before me, so technically she got her freedom a little earlier. 😂
She’s one of those people with way too many talents — content creator, dancer and of course Best Actor 😂 ... basically someone who clearly has plans beyond sitting in front of a laptop all day. 😄
Wishing her the very best for whatever she does next.`
    },

    {
        name: "Pratyusha",
        message: `Pratyusha is a genuinely good person and someone I’ll remember for all the little things. Especially the legendary orange requests. 😂
She kept asking me for oranges, but somehow those oranges never actually made it to her. 😂 Still waiting for that request to be fulfilled!`
    },

    {
        name: "Oleti",
        message: `Oleti is probably one of the chillest people around. No unnecessary tension, no overcomplication — just chill. 😄
Working with him was always easy and comfortable, and that’s something you really appreciate in a team.`
    },

    {
        name: "Harish",
        message: `Harish left around a month before me, so by the time I’m writing this, he has probably completely forgotten about all of us. 😂
But he was definitely part of this chapter and someone I had the chance to work with. Hope everything is going well on the other side!`
    },

    {
        name: "Kranthi",
        message: `Kranthi is one of those people who has interests in basically everything. 😄
Team Lead, dog lover, animal lover, influencer — I wouldn’t be surprised if she has another completely different profession we don’t know about!
Jokes apart, she’s a genuinely good person, and her love for animals is something that really stands out.`
    },

    {
        name: "Asra",
        message: `We may not have had a lot of time together, but it was still nice having you as part of this journey. Wishing you all the very best for what comes next. Good luck!`
    },

    {
        name: "Manideep Adhikam",
        message: `We only got to work together for a short time, but it was still good having you around. Wishing you all the very best for what’s ahead. Good luck!`
    },

    {
        name: "Shiva",
        message: `We may not have had a lot of time together, but it was still nice having you as part of this journey. Wishing you all the very best for what comes next. Good luck!`
    },

    {
        name: "Thaher",
        message: `We may not have had a lot of time together, but it was still nice having you as part of this journey. Wishing you all the very best for what comes next. Good luck!`
    },

    {
        name: "Vaishnavi",
        message: `We may not have had a lot of time together, but it was still nice having you as part of this journey. Wishing you all the very best for what comes next. Good luck!`
    },

    {
        name: "Jaspal",
        message: `We may not have had a lot of time together, but it was still nice having you as part of this journey. Wishing you all the very best for what comes next. Good luck!`
    },

    {
        name: "Akash",
        message: `We may not have had a lot of time together, but it was still nice having you as part of this journey. Wishing you all the very best for what comes next. Good luck!`
    }
];

const grid = document.getElementById("people");
const search = document.getElementById("search");
const empty = document.getElementById("empty");
const modal = document.getElementById("modal");
const modalName = document.getElementById("modal-name");
const modalText = document.getElementById("modal-text");
const modalInitials = document.getElementById("modal-initials");

const hints = [
  "A few words for you →",
  "There’s a little note here →",
  "I had to say a few words →",
  "One last thing I wanted to say →",
  "A little something to remember →",
  "There’s a story behind this name →"
];

const shortGoodbyeNames = [
  "Asra",
  "Jaspal",
  "Shiva",
  "Vaishnavi",
  "Manideep Adhikam",
  "Thaher",
  "Akash"
];

function initials(name) {
  return name.split(/\s+/).map(x => x[0]).slice(0, 2).join("").toUpperCase();
}

function render(query = "") {
  const q = query.trim().toLowerCase();
  let list = people.filter(p => p.name.toLowerCase().includes(q));

  // Keep Harsh first, randomize everyone else.
  if (!q) {
    const harshIndex = list.findIndex(p => p.name === "Harsh");
    const harsh = list.splice(harshIndex, 1)[0];
    list.sort(() => Math.random() - 0.5);
    list.unshift(harsh);
  }

  grid.innerHTML = list.map((p, i) => {
    // Newer people get a visible farewell directly on the card.
    if (shortGoodbyeNames.includes(p.name)) {
      return `<article class="card simple-goodbye-card">
        <div class="card-top">
          <div class="initials">${initials(p.name)}</div>
        </div>
        <div>
          <h3>${p.name}</h3>
          <p>We may not have had much time together, but it was nice having you around. Good luck and all the best for what’s ahead!</p>
        </div>
      </article>`;
    }

    const hint = hints[i % hints.length];

    return `<article class="card" data-index="${people.indexOf(p)}">
      <div class="card-top">
        <div class="initials">${initials(p.name)}</div>
        <span class="arrow">↗</span>
      </div>
      <div>
        <h3>${p.name}</h3>
        <p>${hint}</p>
      </div>
    </article>`;
  }).join("");

  empty.hidden = list.length !== 0;

  grid.querySelectorAll(".card[data-index]").forEach(c =>
    c.addEventListener("click", () => open(Number(c.dataset.index)))
  );
}

function open(i) {
  const p = people[i];
  modalName.textContent = p.name;
  modalText.textContent = p.message;
  modalInitials.textContent = initials(p.name);
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function close() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

search.addEventListener("input", e => render(e.target.value));
document.querySelectorAll("[data-close]").forEach(x => x.addEventListener("click", close));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modal.hidden) close();
});

render();


/* =========================================================
   Shared farewell guestbook — Supabase
   Replace these two values with your Supabase Project URL
   and anon/public key. NEVER put a service_role key here.
   ========================================================= */
const SUPABASE_URL = "https://oocfpsivsqnybynfxjio.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_w1OWuGH3Ox96ND1C7ddsNQ_EL8kNZkP";

const guestbook = {
  client: null,
  user: null,
  comments: [],
  replies: {},
  commentLikes: new Set(),
  replyLikes: new Set()
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[ch]));
}

function formatTime(value) {
  const d = new Date(value);
  return d.toLocaleString([], { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
}

function isConfigured() {
  return SUPABASE_URL.startsWith("https://") && !SUPABASE_URL.includes("YOUR_") &&
         SUPABASE_ANON_KEY && !SUPABASE_ANON_KEY.includes("YOUR_");
}

function setGuestbookStatus(message, kind = "") {
  const el = document.getElementById("guestbook-status");
  if (!el) return;
  el.textContent = message || "";
  el.className = `guestbook-status ${kind}`;
}

function renderSocialComments() {
  const list = document.getElementById("guestbook-comments");
  if (!list) return;
  if (!guestbook.comments.length) {
    list.innerHTML = `<div class="comments-empty">No messages yet. Be the first one to leave something behind. 😄</div>`;
    return;
  }

  list.innerHTML = guestbook.comments.map(comment => {
    const replies = guestbook.replies[comment.id] || [];
    const liked = guestbook.commentLikes.has(comment.id);
    return `
      <article class="comment-card" data-comment-id="${comment.id}">
        <div class="comment-head">
          <div class="comment-avatar">${escapeHtml(initials(comment.name))}</div>
          <div class="comment-meta"><strong>${escapeHtml(comment.name)}</strong><span>${formatTime(comment.created_at)}</span></div>
        </div>
        <p class="comment-body">${escapeHtml(comment.message).replace(/\n/g, "<br>")}</p>
        <div class="comment-actions">
          <button class="social-btn ${liked ? "liked" : ""}" data-action="like-comment" data-id="${comment.id}">👍 <span>${comment.like_count || 0}</span></button>
          <button class="social-btn" data-action="toggle-reply" data-id="${comment.id}">↩ Reply</button>
        </div>
        <div class="reply-form" id="reply-form-${comment.id}" hidden>
          <input data-reply-name="${comment.id}" maxlength="40" placeholder="Your name">
          <textarea data-reply-text="${comment.id}" maxlength="500" placeholder="Write a reply..."></textarea>
          <button data-action="post-reply" data-id="${comment.id}">Post reply</button>
        </div>
        <div class="replies">
          ${replies.map(reply => {
            const replyLiked = guestbook.replyLikes.has(reply.id);
            return `<div class="reply-card">
              <div class="comment-head">
                <div class="comment-avatar small">${escapeHtml(initials(reply.name))}</div>
                <div class="comment-meta"><strong>${escapeHtml(reply.name)}</strong><span>${formatTime(reply.created_at)}</span></div>
              </div>
              <p class="comment-body">${escapeHtml(reply.message).replace(/\n/g, "<br>")}</p>
              <button class="social-btn ${replyLiked ? "liked" : ""}" data-action="like-reply" data-id="${reply.id}">👍 <span>${reply.like_count || 0}</span></button>
            </div>`;
          }).join("")}
        </div>
      </article>`;
  }).join("");
}

async function loadSocialData() {
  const { data: comments, error } = await guestbook.client
    .from("comments")
    .select("id,name,message,created_at,like_count")
    .order("created_at", { ascending: false });
  if (error) throw error;
  guestbook.comments = comments || [];

  const { data: replies, error: replyError } = await guestbook.client
    .from("replies")
    .select("id,comment_id,name,message,created_at,like_count")
    .order("created_at", { ascending: true });
  if (replyError) throw replyError;
  guestbook.replies = {};
  (replies || []).forEach(r => {
    (guestbook.replies[r.comment_id] ||= []).push(r);
  });

  const { data: cLikes, error: cLikeError } = await guestbook.client
    .from("comment_likes").select("comment_id").eq("user_id", guestbook.user.id);
  if (cLikeError) throw cLikeError;
  guestbook.commentLikes = new Set((cLikes || []).map(x => x.comment_id));

  const { data: rLikes, error: rLikeError } = await guestbook.client
    .from("reply_likes").select("reply_id").eq("user_id", guestbook.user.id);
  if (rLikeError) throw rLikeError;
  guestbook.replyLikes = new Set((rLikes || []).map(x => x.reply_id));

  renderSocialComments();
}

async function requireUserName(input) {
  const name = input.value.trim();
  if (!name) {
    input.focus();
    throw new Error("Please enter your name.");
  }
  return name;
}

async function postComment() {
  try {
    const name = await requireUserName(document.getElementById("comment-name"));
    const message = document.getElementById("comment-text").value.trim();
    if (!message) throw new Error("Please write a message.");
    const { error } = await guestbook.client.from("comments").insert({
      user_id: guestbook.user.id, name, message
    });
    if (error) throw error;
    document.getElementById("comment-text").value = "";
    localStorage.setItem("farewellGuestName", name);
    setGuestbookStatus("Message posted!", "success");
    await loadSocialData();
  } catch (e) { setGuestbookStatus(e.message, "error"); }
}

async function postReply(commentId) {
  try {
    const nameInput = document.querySelector(`[data-reply-name="${commentId}"]`);
    const textInput = document.querySelector(`[data-reply-text="${commentId}"]`);
    const name = await requireUserName(nameInput);
    const message = textInput.value.trim();
    if (!message) throw new Error("Please write a reply.");
    const { error } = await guestbook.client.from("replies").insert({
      comment_id: commentId, user_id: guestbook.user.id, name, message
    });
    if (error) throw error;
    textInput.value = "";
    localStorage.setItem("farewellGuestName", name);
    document.getElementById(`reply-form-${commentId}`).hidden = true;
    setGuestbookStatus("Reply posted!", "success");
    await loadSocialData();
  } catch (e) { setGuestbookStatus(e.message, "error"); }
}

async function toggleLike(table, idColumn, id, set, countTable, countColumn) {
  try {
    const alreadyLiked = set.has(id);
    if (alreadyLiked) {
      const { error } = await guestbook.client.from(table).delete()
        .eq(idColumn, id).eq("user_id", guestbook.user.id);
      if (error) throw error;
      set.delete(id);
    } else {
      const { error } = await guestbook.client.from(table).insert({
        [idColumn]: id, user_id: guestbook.user.id
      });
      if (error) throw error;
      set.add(id);
    }
    await loadSocialData();
  } catch (e) { setGuestbookStatus("Could not update the like. Please try again.", "error"); }
}

function wireSocialEvents() {
  document.getElementById("post-comment")?.addEventListener("click", postComment);
  document.getElementById("guestbook-comments")?.addEventListener("click", async e => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const id = btn.dataset.id;
    if (btn.dataset.action === "toggle-reply") {
      const form = document.getElementById(`reply-form-${id}`);
      form.hidden = !form.hidden;
      if (!form.hidden) document.querySelector(`[data-reply-name="${id}"]`)?.focus();
    } else if (btn.dataset.action === "post-reply") {
      await postReply(id);
    } else if (btn.dataset.action === "like-comment") {
      await toggleLike("comment_likes", "comment_id", id, guestbook.commentLikes);
    } else if (btn.dataset.action === "like-reply") {
      await toggleLike("reply_likes", "reply_id", id, guestbook.replyLikes);
    }
  });
}

async function initSocial() {
  const section = document.getElementById("guestbook");
  if (!section) return;
  if (!isConfigured()) {
    setGuestbookStatus("Demo mode: add your Supabase URL and anon key in script.js to make messages shared.", "demo");
    document.getElementById("guestbook-comments").innerHTML = `
      <div class="comments-empty demo-preview">
        <strong>Preview</strong>
        <div class="preview-comment"><b>Akshaya</b><span>All the best Izhan! 😄</span><small>👍 4 &nbsp; ↩ Reply</small></div>
        <div class="preview-comment"><b>Harsh</b><span>Bro, the bike comment 😂</span><small>👍 7 &nbsp; ↩ Reply</small></div>
      </div>`;
    return;
  }

  try {
    setGuestbookStatus("Connecting...", "demo");
    const { createClient } = window.supabase;
    guestbook.client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data, error } = await guestbook.client.auth.signInAnonymously();
    if (error) throw error;
    guestbook.user = data.user;
    const savedName = localStorage.getItem("farewellGuestName");
    if (savedName) document.getElementById("comment-name").value = savedName;
    await loadSocialData();
    wireSocialEvents();
    setGuestbookStatus("", "");

    guestbook.client.channel("farewell-live")
      .on("postgres_changes", { event: "*", schema: "public", table: "comments" }, loadSocialData)
      .on("postgres_changes", { event: "*", schema: "public", table: "replies" }, loadSocialData)
      .on("postgres_changes", { event: "*", schema: "public", table: "comment_likes" }, loadSocialData)
      .on("postgres_changes", { event: "*", schema: "public", table: "reply_likes" }, loadSocialData)
      .subscribe();
  } catch (e) {
    setGuestbookStatus("The guestbook could not connect. Check the Supabase setup.", "error");
    console.error(e);
  }
}

const guestNameInput = document.getElementById("comment-name");
if (guestNameInput) guestNameInput.value = localStorage.getItem("farewellGuestName") || "";
initSocial();
