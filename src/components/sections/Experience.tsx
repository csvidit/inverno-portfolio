import ExperienceItem from "../ExperienceItem";

const Experience = () => {
  return (
    <section className="flex flex-col gap-2 lg:gap-4">
      <h2 className="text-2xl lg:text-4xl text-neutral-100">Work Experience</h2>
      <div className="flex flex-col gap-2 lg:gap-4 border-l border-dashed border-neutral-700 pt-4 lg:pt-8">
        <ExperienceItem
          duration="sep 2023 - present"
          title="software development engineer"
          company="pixus inc"
        >
          <ul className="ml-4 flex flex-col space-y-1 text-base text-neutral-500 list-disc">
            <li>
              Developed the second version of the CaptureNoire internal beta
              with refreshed UI made using Jetpack Compose and backend code
              ported to Kotlin
            </li>
            <li>
              Revamped the user flow of the app for a more immersive UX, and
              added Firebase Authentication, Storage, and Firestore database
              integrations
            </li>
          </ul>
        </ExperienceItem>
        <ExperienceItem
          duration="jun 2022 - dec 2022"
          title="software engineer intern"
          company="pixus inc"
        >
          <ul className="ml-4 flex flex-col space-y-1 text-base text-neutral-500 list-disc">
            <li>
              Spearheaded development of CaptureNoire, an Android photography
              app catering to diverse skin tones, with an upcoming beta release
            </li>
            <li>
              Applied best practices in UI/UX design, object-oriented
              principles, and Android development as the sole computer science
              expert at a budding startup
            </li>
          </ul>
        </ExperienceItem>
      </div>
    </section>
  );
};

export default Experience;
