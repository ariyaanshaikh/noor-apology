"use client";

import { useState } from "react";

const promises = [
  {
    number: "01",
    title: "I will listen",
    text: "Not just wait for my turn to speak. Your feelings deserve my full attention.",
  },
  {
    number: "02",
    title: "I will show up",
    text: "With patience, honesty, and the kind of care that is felt—not merely promised.",
  },
  {
    number: "03",
    title: "I will do better",
    text: "I know an apology matters only when my actions after it are different.",
  },
];

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [answer, setAnswer] = useState<"forgiven" | "time" | null>(null);

  const openLetter = () => {
    setOpened(true);
    window.setTimeout(() => {
      document.getElementById("letter")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 350);
  };

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="noise" aria-hidden="true" />
        <p className="eyebrow">A little note from my heart</p>
        <div className="hero-copy">
          <h1 id="hero-title">
            I owe you more than
            <span> just a sorry.</span>
          </h1>
          <p className="intro">
            So I made a little space for the words I should have said with
            more care.
          </p>
        </div>

        <button
          className={`envelope ${opened ? "is-open" : ""}`}
          onClick={openLetter}
          aria-expanded={opened}
          aria-controls="letter"
        >
          <span className="envelope-shadow" />
          <span className="envelope-back" />
          <span className="paper-preview">
            <span>for my favourite person</span>
            <b>♥</b>
          </span>
          <span className="envelope-front" />
          <span className="envelope-flap" />
          <span className="seal">A</span>
          <span className="open-hint">tap to open</span>
        </button>

        <div className="scroll-note" aria-hidden="true">
          <span />
          a sincere apology awaits
        </div>
      </section>

      <section id="letter" className={`letter-section ${opened ? "revealed" : ""}`}>
        <div className="letter-card">
          <div className="letter-topline">
            <span>Dear love,</span>
            <span className="date">from someone who cares deeply</span>
          </div>

          <h2>I&apos;m truly sorry.</h2>

          <div className="letter-body">
            <p>
              I&apos;ve replayed what happened, and I keep coming back to the
              same truth: <strong>I hurt you, and you didn&apos;t deserve that.</strong>
            </p>
            <p>
              I&apos;m not here to defend myself or make the moment smaller. I
              want to own my mistake. Your feelings matter to me, and knowing
              that my actions made you feel anything less than loved is
              something I am genuinely sorry for.
            </p>
            <blockquote>
              “You are too important to me for pride to stand where honesty
              should be.”
            </blockquote>
            <p>
              I can&apos;t undo the moment, but I can learn from it. I want to be
              softer with your heart, more thoughtful with my words, and more
              present in the moments that matter. Not for a day—for all the
              days that follow.
            </p>
            <p>
              I love the little things about us: the conversations that run
              too long, the smiles only we understand, and how ordinary days
              feel special with you in them. I never want to take any of it,
              or you, for granted.
            </p>
          </div>

          <div className="signature">
            <span>With all my heart,</span>
            <strong>the one who is very sorry</strong>
            <i>♥</i>
          </div>
        </div>
      </section>

      <section className="promise-section" aria-labelledby="promise-title">
        <div className="section-heading">
          <p className="eyebrow">Because words need actions</p>
          <h2 id="promise-title">What I promise you</h2>
        </div>
        <div className="promise-grid">
          {promises.map((promise) => (
            <article className="promise-card" key={promise.number}>
              <span>{promise.number}</span>
              <div>
                <h3>{promise.title}</h3>
                <p>{promise.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="question-section">
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />
        <div className="question-card">
          {!answer ? (
            <>
              <span className="tiny-heart" aria-hidden="true">♥</span>
              <p className="eyebrow">One gentle question</p>
              <h2>Can we begin again?</h2>
              <p className="question-copy">
                No pressure, no perfect ending—just me hoping for the chance
                to make things right.
              </p>
              <div className="actions">
                <button className="primary-button" onClick={() => setAnswer("forgiven")}>
                  I forgive you <span>♥</span>
                </button>
                <button className="quiet-button" onClick={() => setAnswer("time")}>
                  I need a little time
                </button>
              </div>
            </>
          ) : answer === "forgiven" ? (
            <div className="response response-happy" role="status">
              <div className="heart-burst" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span key={index}>♥</span>
                ))}
              </div>
              <span className="response-icon">♥</span>
              <h2>Thank you, my love.</h2>
              <p>
                This means more than I can say. I&apos;ll cherish this chance and
                prove it with the way I love you from here.
              </p>
            </div>
          ) : (
            <div className="response" role="status">
              <span className="response-icon">☾</span>
              <h2>I understand.</h2>
              <p>
                Take all the time you need. I care about you enough to respect
                your space, and my apology will still be here when you&apos;re ready.
              </p>
            </div>
          )}
        </div>
      </section>

      <footer>
        <span>Made with honesty</span>
        <i>♥</i>
        <span>and a hopeful heart</span>
      </footer>
    </main>
  );
}
