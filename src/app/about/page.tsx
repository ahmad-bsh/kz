import Link from "next/link";
import React from "react";
import { siteConfig } from "../../../config/site";

function About() {
  const author = siteConfig.authors.find(
    (author) => author.name === "AhmadBShaik"
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <p className="mt-5">
        Welcome to my personal blog! I&apos;m{" "}
        <Link href={author?.links?.personalSite!}>
          <span className="text-green-500 font-bold">Ahmad</span>
        </Link>
        , a dedicated software engineer specializing in front-end development
        with React and Next.js. This space is a reflection of my journey,
        documenting the challenges I overcome, the insights I gain, and the
        innovations I create in the world of front-end engineering.
      </p>
      <section className="space-y-5 mt-5">
        <div className="text-xl font-bold">My Mission</div>
        <p>
          In the rapidly evolving field of technology, staying updated and
          constantly improving is crucial. My mission is to contribute to this
          dynamic ecosystem by sharing valuable knowledge and experiences.
          Through this blog, I aim to:
        </p>
        <p>
          <span className="font-bold"> - Document My Learnings:</span> Whether
          it&apos;s a new feature in React, optimizing performance in Next.js, or
          implementing complex user interfaces, I&apos;ll be sharing detailed
          tutorials, guides, and articles that capture my learning process.
        </p>
        <p>
          <span className="font-bold"> - Share My Discoveries:</span> From
          exploring the latest trends in front-end development to experimenting
          with new tools and libraries, I&apos;ll provide honest reviews and deep
          dives into the most exciting advancements in the React and Next.js
          ecosystem.
        </p>
      </section>
      <section className="space-y-5 mt-5">
        <div className="text-xl font-bold">Who Am I?</div>

        <p>
          I am a front-end engineer with 2+ years of experience in developing
          high-quality web applications. My career has been a thrilling journey
          through various projects, companies, and technologies. Here are some
          highlights:
        </p>

        <p>
          <span className="font-bold"> - Professional Experience</span>: I&apos;ve
          had the privilege of working with Early Stage Startup and Mid Sized
          Company, where I&apos;ve honed my skills in React, Next.js, and other
          modern web technologies.
        </p>
        <p>
          <span className="font-bold"> - Educational Background:</span> I hold a
          Computer Science Degree, where I developed a strong foundation in
          computer science and web development.
        </p>
        <p>
          <span className="font-bold"> - Passion Projects:</span> In my spare
          time, I love working on personal projects, contributing to
          open-source, and experimenting with the latest tools and frameworks in
          the front-end ecosystem.
        </p>
      </section>
      <section className="space-y-5 mt-5 mb-10">
        <div className="text-xl font-bold">Join the Journey</div>
        <p>
          This blog is not just about me; it&apos;s about us. It&apos;s about building a
          community of like-minded individuals who are eager to learn, share,
          and grow together.
        </p>
        <p>
          Thank you for visiting my blog. Together, let&apos;s embark on this
          exciting journey of discovery, innovation, and personal growth in
          front-end development.
        </p>
        <div>
          <div>Stay curious,</div>
          <div className="font-medium">Ahmad.</div>
        </div>
      </section>
    </div>
  );
}

export default About;
