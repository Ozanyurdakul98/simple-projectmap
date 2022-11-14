import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <h1 className='text-center text-2xl font-bold md:text-4xl'>Project map of Ozan Yurdakul</h1>
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
        <div className='col-start-2 px-5'>
          <h2 className=' text-2xl'>Tonstudio-Kleinanzeigen</h2>
          <div>
            <p>Platform for recording studios</p>
            <div className='mt-5 flex  flex-col gap-3 font-thin'>
              <p>
                Tonstudio-Kleinanzeigen is a platform for recording studio bussiness owners or amateur music producers
                to host their services in form of a digital business card. Imagine this to be like a ebay-kleinanzeigen
                or airbnb for recording studios.
              </p>
              <p>
                The aim is to help getting more attraction to their services as there is no plattform like this,
                offering a main place, specially for music/sound production services.
              </p>
            </div>
            <div className='mt-5 flex flex-col gap-2'>
              <p>Specifications </p>
              <p>when: 10.22 - 11.22 (6 weeks)</p>
              <p>for whom: capstone-project for neuefische traineeship</p>
              <p>notes: worked with github project-board, user-storys and code-reviews from coaches</p>
              <div>
                <ul>
                  <li>tech-stack:</li>
                  <li>react, next.js, tailwindCss, mongoose, mongoDB, next-auth, cloudinary, headlessUi </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* quiz */}
      <section className='mt-20 flex w-full flex-wrap gap-10 sm:grid sm:grid-cols-2 sm:gap-0'>
        {/* left */}
        <div className='grid grid-cols-2'>
          <div className='col-start-1 h-full w-full'>
            <Image
              src='/quiz/pic1.png'
              layout='responsive'
              width={'50px'}
              height={'100px'}
              quality='100'
              objectFit='contain'
            />
          </div>
          <div className='col-start-2 grid'>
            <Image
              src='/quiz/pic2.png'
              layout='responsive'
              width={'100px'}
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
                This was the first bigger project in my Neuefische Traineeship. it was a ongoing project for a two or
                three weeks, because we applied everything new, we learned from our coaches.
              </p>
              <p>For example state management, using props, local storage</p>
            </div>
            <div className='mt-5 flex flex-col gap-2'>
              <p>Specifications </p>
              <p>when: 10.22 - 11.22 (6 weeks)</p>
              <p>for whom: capstone-project for neuefische traineeship</p>
              <p>notes: worked with github project-board, user-storys and code-reviews from coaches</p>
              <div>
                <ul>
                  <li>tech-stack:</li>
                  <li>react, next.js, tailwindCss, mongoose, mongoDB, next-auth, cloudinary, headlessUi </li>
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
                This was my first professional Project in web development. So i can say, everything in my new journy of
                life started with wordpress, because by working on this project, i detected a passion for working with
                web technologies, i hadn't discovered on other jobs
              </p>
              <p>
                The aim is to prank ones friends, girlfriends or enemies 😈. you type in a number and in the background
                an api is sending an sms with the spoiler of the selected tv show and it's season or episode. the bit of
                fun and exhausting part was, to actually have to watch all of these movies and shows. this website, i
                made commercial with stripe and paypal.
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
          <video
            src='/bittegehweg/video1.mp4'
            className='relative top-24'
            type='video/mp4'
            controls
            autoPlay
            loop
            muted
            width='300px'></video>
          <video
            src='/bittegehweg/video2.mp4'
            className=' col-start-1 row-start-2'
            type='video/mp4'
            controls
            autoPlay
            loop
            muted
            width='300px'></video>
          <Image
            src='/bittegehweg/poster1.jpg'
            layout='responsive'
            width={'200px'}
            height={'200px'}
            quality='100'
            objectFit='contain'
          />
        </div>
        {/* right */}
        <div className='col-start-2 px-5'>
          <h2 className=' text-2xl'>bittegehweg.de</h2>
          <div>
            <p>Paid pranking service - breaking up prank - other pranks</p>
            <div className='mt-5 flex  flex-col gap-3 font-thin'>
              <p>This was a side project to spoilnation.</p>
              <p>
                You know, with twilio api, if someone sends a response to a prank sms, you are able to read that. only
                that was worth to make these projects.
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
  );
}
