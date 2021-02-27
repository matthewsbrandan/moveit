import React from "react";
import Head from "next/head";
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import styles from "../styles/pages/Home.module.css";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps{
  username: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      username={props.username}
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    > 
      <div className={styles.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>
        <ExperienceBar/>
        <section>
          <div>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) =>{
  const user = {
    username: '',
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2
  }

  const { username, level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      username: username,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}