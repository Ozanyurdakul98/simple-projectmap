import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='mx-1 mt-20 overflow-x-hidden'>
      <h1 className='mb-10 text-center text-2xl font-bold md:text-4xl'>Project map of Ozan Yurdakul</h1>
      <section className='flex flex-col items-center'>
        <p className='px-10 font-thin sm:max-w-[650px] sm:px-0 xl:max-w-[850px]'>
          Hi! Ich bin Ozan! Ich code jetzt seit fast 1 Jahr. Als Full-Stack-Entwickler habe ich sowohl mit Frontend- als
          auch mit Backend-Technologien gearbeitet und meine Favoriten herausgearbeitet. Auf der Reise wurde mir klar,
          dass meine Leidenschaft für das Programmieren 🔥 ist und nicht erlischen wird. Mit dieser Leidenschaft habe
          ich nun einige Nice-to-have-Projekte gesammelt. Durch das Programmieren wurde ich selbstbewusster und konnte
          mehr als nur meinen täglichen Code im Leben organisieren lernen.
        </p>
        <div className='flex gap-4'>
          <p>
            LinkedIn:
            <a
              className='pl-2 text-blue-500 underline '
              href='https://www.linkedin.com/in/ozan-leon-yurdakul-37297021a/'>
              my profile
            </a>
          </p>
          <p>
            Github:
            <a
              className='pl-2 text-blue-500 underline '
              href='https://www.linkedin.com/in/ozan-leon-yurdakul-37297021a/'>
              my profile
            </a>
          </p>
          <p>
            CV:
            <a
              className='pl-2 text-blue-500 underline '
              href='https://drive.google.com/file/d/1srE_X_PY5Z5TIZ85D8Xw_bLNHVGjjRI_/view?usp=sharing'>
              my cv
            </a>
          </p>
        </div>
      </section>
      <div>
        {/* tonstudio-kleinanzeigen */}
        <section className='mt-20 flex w-full flex-wrap gap-10 sm:grid sm:grid-cols-2 sm:gap-0'>
          {/* left */}
          <div className='flex w-full justify-center'>
            <video
              src='/tonstudioKleinanzeigen/video.mov'
              type='video/mp4'
              controls
              autoPlay
              loop
              muted
              width='300px'></video>
          </div>
          {/* right */}
          <div className='col-start-2 px-5 [&_li]:font-thin'>
            <h2 className=' text-2xl'>Tonstudio-Kleinanzeigen</h2>
            <div>
              <p>Platform for recording studios</p>
              <div className='mt-5 flex  flex-col gap-3 font-thin'>
                <p>
                  Tonstudio-Kleinanzeigen is a platform for recording studio bussiness owners or amateur music producers
                  to host their services in form of a digital business card. Imagine this to be like a
                  ebay-kleinanzeigen or airbnb for recording studios.
                </p>
                <p>
                  The aim is to help getting more attraction to their services as there is no plattform like this,
                  offering a main place, specially for music/sound production services.
                </p>
              </div>
              <div className='mt-5 flex flex-col gap-1'>
                <p>Specifications </p>
                <ul>
                  when: <li> 10.22 - .. (since 7 weeks)</li>
                </ul>
                <ul>
                  for whom: <li>capstone-project for neuefische traineeship (successfully finished)</li>
                  <li>still working on it</li>
                </ul>
                <ul>
                  notes: <li> worked with github project-board, user-storys and code-reviews from coaches</li>
                </ul>
                <ul>
                  current feature: <li>Dashboard for Users and Admin with tables for added studios and users</li>
                  <li>User roles to disinguish each user session between user and admin</li>
                  <li>Dashboard settings page</li>
                </ul>
                <ul>
                  tech-stack:
                  <li>react, next.js, tailwindCss, mongoose, mongoDB, next-auth, cloudinary, headlessUi</li>
                  <li>Server-side-rendering, Static-site-generation, api's</li>
                </ul>
                <div>
                  <ul className='text-blue-500'>
                    links:
                    <li className='flex gap-3 underline'>
                      <a href='https://capstone-project-lime-ten.vercel.app'>live here</a>
                      <a href='https://github.com/Ozanyurdakul98/capstone-project'>repo here</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* colorsaver */}
        <section className='mt-20 flex w-full flex-wrap gap-10 sm:grid sm:grid-cols-2 sm:gap-0'>
          {/* left */}
          <div className='grid w-full justify-center'>
            <div className='col-start-1 h-full w-[300px]'>
              <Image
                src='/colorsaver/pic2.png'
                layout='responsive'
                width={'300'}
                height={'450px'}
                quality='100'
                objectFit='contain'
              />
            </div>
          </div>
          {/* right */}
          <div className='col-start-2 px-5'>
            <h2 className=' text-2xl'>Color saver application</h2>
            <div>
              <p>save (favourite) color palettes for projects</p>
              <div className='mt-5 flex  flex-col gap-3 font-thin'>
                <p>
                  For this project we were introducecd to Github project board. The whole project and user stories was
                  described in the github project board of this template repo. in 3 days we had to work our way trough
                  those user stories.
                </p>
                <p>
                  You can save you favourite color by a color picker and then save it. it will be saved in local
                  storage. you can add and delete cards. you can also copy to clipboard.
                </p>
              </div>
              <div className='mt-5 flex flex-col gap-2'>
                <p>Specifications </p>
                <p>when: 09.22 - 10.22</p>
                <p>for whom: project for neuefische</p>
                <div>
                  <ul>
                    <li>tech-stack:</li>
                    <li>react, local storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ricmorty */}
        <section className='mt-20 flex w-full flex-wrap gap-10 sm:grid sm:grid-cols-2 sm:gap-0'>
          {/* left */}
          <div className='grid w-full grid-cols-2'>
            <div className='relative col-start-1 min-h-[200px] max-w-[300px]'>
              <Image
                src='/ricmorty/pic1.png'
                layout='fill'
                width={'250px'}
                height={'200px'}
                quality='100'
                objectFit='contain'
              />
            </div>
            <div className='relative col-start-2 min-h-[200px] max-w-[300px]'>
              <Image
                src='/ricmorty/pic2.png'
                layout='fill'
                width={'250px'}
                height={'200px'}
                quality='100'
                objectFit='contain'
              />
            </div>
          </div>
          {/* right */}
          <div className='col-start-2 px-5'>
            <h2 className=' text-2xl'>Rick & Morty</h2>
            <div>
              <p>Fetching rick and morty data</p>
              <div className='mt-5 flex  flex-col gap-3 font-thin'>
                <p>
                  This project was a group-work of 4 perople. we worked together, everyone on his own feature/branch, on
                  his own feature. we helped each other and made everything fit together for a perfect merging
                  experience .
                </p>
                <p>there were 4 features. pagination, fetching, searchbar and populating cards.</p>
              </div>
              <div className='mt-5 flex flex-col gap-2'>
                <p>Specifications </p>
                <p>when: during traineeship</p>
                <p>for whom: project for neuefische</p>
                <div>
                  <ul>
                    <li>tech-stack:</li>
                    <li>react, fetching api</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* quiz */}
        <section className='mt-20 flex w-full flex-wrap gap-10 sm:grid sm:grid-cols-2 sm:gap-0'>
          {/* left */}
          <div className='grid w-full grid-cols-2'>
            <div className='relative min-h-[300px] max-w-[300px]'>
              <Image
                src='/quiz/pic1.png'
                layout='fill'
                width={'50px'}
                height={'100px'}
                quality='100'
                objectFit='contain'
              />
            </div>
            <div className='relative min-h-min max-w-[300px]'>
              <Image
                src='/quiz/pic2.png'
                layout='fill'
                width={'150px'}
                height={'100px'}
                quality='100'
                objectFit='contain'
              />
            </div>
          </div>
          {/* right */}
          <div className='col-start-2 px-5'>
            <h2 className=' text-2xl'>Quiz Application</h2>
            <div>
              <p>Quiz web application</p>
              <div className='mt-5 flex  flex-col gap-3 font-thin'>
                <p>
                  This was the first bigger project in my Neuefische Traineeship. it was first coded in javascript and
                  then fully recoded in react. it was a ongoing project for two or three weeks, because we applied
                  everything new, we learned from our coaches.
                </p>
                <p>
                  For example state management, using props, local storage, etc. You can create question cards and also
                  save them to bookmarks.
                </p>
              </div>
              <div className='mt-5 flex flex-col gap-2'>
                <p>Specifications </p>
                <p>when: 09.22 - 10.22 - during traineeship</p>
                <p>for whom: project for neuefische</p>
                <div>
                  <ul>
                    <li>tech-stack:</li>
                    <li>react, local storage</li>
                    <li>javascript, local storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* spoilnation */}
        <section className='mt-20 flex w-full flex-wrap gap-10 sm:grid sm:grid-cols-2  sm:gap-0'>
          {/* left */}
          <div className='grid grid-cols-2 grid-rows-2'>
            <video src='/spoilnation/video5.mp4' type='video/mp4' controls autoPlay loop muted width='300px'></video>
            <video src='/spoilnation/video7.mp4' type='video/mp4' controls autoPlay loop muted width='300px'></video>
            <video src='/spoilnation/video6.mp4' type='video/mp4' controls autoPlay loop muted width='300px'></video>
            <video src='/spoilnation/video2.mp4' type='video/mp4' controls autoPlay loop muted width='300px'></video>
          </div>
          {/* right */}
          <div className='col-start-2 px-5'>
            <h2 className=' text-2xl'>Spoilnation .de/.com</h2>
            <div>
              <p>Paid pranking service - spoil netflix tv shows and smovies</p>
              <div className='mt-5 flex  flex-col gap-3 font-thin'>
                <p>
                  This was my first professional Project in web development. So i can say, everything in my new journy
                  of life started with wordpress, because by working on this project, i discovered a passion a had not
                  with other jobs before.
                </p>
                <p>
                  The aim is to prank ones friends, girlfriends or enemies 😈. you type in a number and in the
                  background an api is sending an sms with the spoiler of the selected tv show and it's season or
                  episode. the bit of fun and exhausting part was, to actually have to watch all of these movies and
                  shows. this website, i made commercial with stripe and paypal.
                </p>
              </div>
              <div className='mt-5 flex flex-col gap-2'>
                <p>Specifications </p>
                <p>when: end of 2020</p>
                <p>for whom: private project</p>
                <p>notes: this was a business project. made google and social media marketing</p>
                <div>
                  <ul>
                    <li>tech-stack:</li>
                    <li>wordpress, css, html, elementor pro, twilio api, canvas pro, stripe</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* bittegehweg */}
        <section className='relative mt-20 flex w-full flex-wrap gap-10 sm:grid sm:grid-cols-2 sm:gap-0'>
          {/* left */}
          <div className='grid grid-cols-2 grid-rows-2 '>
            <div className='relative  col-start-1 row-start-1 min-h-[200px] max-w-[300px]'>
              <video
                src='/bittegehweg/video1.mp4'
                className='relative top-24'
                type='video/mp4'
                controls
                autoPlay
                loop
                muted
                width='300px'></video>
            </div>
            <div className='relative col-start-1 row-start-2 min-h-[200px] max-w-[300px]'>
              <video src='/bittegehweg/video2.mp4' type='video/mp4' controls autoPlay loop muted width='300px'></video>
            </div>
            <div className='relative min-h-[200px] max-w-[300px]'>
              <Image
                src='/bittegehweg/poster1.jpg'
                layout='fill'
                width={'275px'}
                height={'595px'}
                quality='100'
                objectFit='contain'
              />
            </div>
          </div>
          {/* right */}
          <div className='col-start-2 px-5'>
            <h2 className=' text-2xl'>bittegehweg.de</h2>
            <div>
              <p>Paid pranking service - breaking up prank - other pranks</p>
              <div className='mt-5 flex  flex-col gap-3 font-thin'>
                <p>This was a side project to spoilnation.</p>
                <p>
                  With twilio api, if someone sends a response to a prank sms, you are able to read that. only that was
                  worth to make these projects.
                </p>
              </div>
              <div className='mt-5 flex flex-col gap-2'>
                <p>Specifications </p>
                <p>when: end of 2020 shortly after spoilnation</p>
                <p>for whom: private project</p>
                <div>
                  <ul>
                    <li>tech-stack:</li>
                    <li>wordpress, css, html, elementor pro, twilio api, canvas pro, stripe</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
