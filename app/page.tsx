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
            <span>for Noor, my favourite person</span>
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
            <span>Dear Noor,</span>
            <span className="date">from someone who cares deeply</span>
          </div>

          <h2>I&apos;m truly sorry.</h2>

          <div className="letter-body">
            <p>
              I know I am a mess sometimes, but that never means I should
              bring that mess into your life. I&apos;m trying every day to be
              better for you. And I keep coming back to the same truth:
              <strong> I hurt you, and you didn&apos;t deserve that.</strong>
            </p>
            <p>
              I know yesterday was not good. I understand what you may have
              thought after seeing those things, and I&apos;m not here to dismiss
              your perspective. Trust me, Noor: I had not gone through that
              folder, and I had not remembered it either. Still, I&apos;m ashamed
              that it hurt you and made you feel this way.
            </p>
            <blockquote>
              “Galti hui hai toh maan liya humne,<br />
              Tumhe rula kar khud ko haar liya humne.”
            </blockquote>
            <p>
              I can&apos;t undo the moment, but I can learn from it. I am ashamed
              of myself, because you don&apos;t deserve to be hurt—not by anyone,
              and especially not by me. I want to be softer with your heart,
              more thoughtful with my words, and more present in the moments
              that matter.
            </p>
            <p>
              Please ek baar maaf kardo. Apne BUBU ko maaf kardo. Tumhare bina
              tumhara BUBU adhura hai. I will keep showing you, every day,
              that I can be better—for you and for us.
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
              <h2>Noor, can you forgive your BUBU?</h2>
              <p className="question-copy">
                I&apos;m sorry. I will always value you, listen to you, and work
                to deserve your trust.
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
              <span className="response-icon">♥</span>
              <h2>I understand, Noor.</h2>
              <p>
                Take the time you need. I&apos;ll respect your space and keep doing
                the work to be better, because you matter deeply to me.
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
