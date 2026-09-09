const people = [
    {
        name: "Akshaya",
        message: `Akshaya has probably heard me say “Akshaya, one issue…” more times than she would like to remember. 😄
Whenever I got stuck with troubleshooting, she was always there to help me figure things out. A big part of what I learned came from her guidance, and I’m genuinely thankful for that.`
    },

    {
        name: "Akshay",
        message: `We may not have had a lot of time together, but it was still nice having you around. Wishing you all the very best for what’s ahead. Good luck!`
    },

    {
        name: "Pallavi",
        message: `Pallavi has been a part of my journey here. I really appreciate the guidance and support she provided during my time with the team, and I’ll remember the experiences we shared along the way. 😊

Wishing her all the very best for the future.`
    },

    {
        name: "Harsh",
        message: `Harsh bhai you are honestly one of the best people I’ve worked with. Super chill, easy to talk to, and somehow manages to be a manager without making you feel like you’re talking to a manager. 😄

And then there’s the biker side  — I’m sure you would choose a bike ride over a team meeting any day! 😂`
    },

    {
        name: "Manisha",
        message: `Manisha has been a valued part of my journey here. I’ve learned a lot from her during my time here, and I appreciate the opportunity to have worked with her and the experience we shared as part of the team. Wishing her all the very best and continued success in the future.`
    },

    {
        name: "Lavanya B",
        message: `Lavanya is not just a colleague — she’s more like a sister. 😊
She’s genuinely one of the nicest people I’ve met here, and having someone like her around made work feel a little less like just work. 😄
Definitely going to miss her.`
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
        Always chill and somehow never seems to be in a hurry. That calm and easygoing nature is what stands out about him the most.`
    },

    {
        name: "Prabhu",
        message: `Prabhu started with us and then moved into QA, but somehow he never really left the team. 😂
He was still with us, hanging around, and being part of the same journey.`
    },

    {
        name: "Priya",
        message: `Priya is genuinely a very good person and someone who was always nice to have around. Sometimes it’s the small, everyday interactions that stay with you, and I’ll definitely remember those from my time here. 😊`
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
        name: "Siva",
        message: `We may not have had a lot of time together, but it was still nice having you as part of this journey. Wishing you all the very best for what comes next. Good luck!`
    },

    {
        name: "Thaher",
        message: `We may not have had a lot of time together, but it was still nice having you as part of this journey. Wishing you all the very best for what comes next. Good luck!`
    },

    {
        name: "Vyshnavi",
        message: `We may not have had a lot of time together, but it was still nice having you as part of this journey. Wishing you all the very best for what comes next. Good luck!`
    },

    {
        name: "Jaspal",
        message: `We may not have had a lot of time together, but it was still nice having you as part of this journey. Wishing you all the very best for what comes next. Good luck!`
    },

    {
        name: "Lavanya",
        message: `We may not have had a lot of time together, but it was still nice having you around. Wishing you all the very best for what’s ahead. Good luck!`
    },

    {
        name: "Renuka",
        message: `We may not have had a lot of time together, but it was still nice having you around. Wishing you all the very best for what’s ahead. Good luck!`
    },

    {
        name: "Ramya",
        message: `We may not have had a lot of time together, but it was still nice having you around. Wishing you all the very best for what’s ahead. Good luck!`
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
  "Siva",
  "Vyshnavi",
  "Manideep Adhikam",
  "Thaher",
  "Akash",
  "Lavanya",
  "Renuka",
  "Ramya",
  "Akshay"
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
