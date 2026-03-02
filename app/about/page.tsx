import Image from "next/image";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  weight: ["400", "700"]
});

export default function About() {
  return (
    <div className="space-y-4 p-2">
      <div className="gap-4 mt-8 text-left md:block lg:flex ">
        <div className="space-y-4 w-[650px] max-w-full">
          <h2 className={`text-3xl ${ptSerif.className}`}>About</h2>
          <p>
            Kieran Sukachevin is an artist, illustrator, and comic artist
            currently living in Southern California. Kieran has been doodling
            his whole life and is still doodling to this day. He graduated from
            Walla Walla University in 2022 with a minor in art, ready to take on
            the world.
          </p>
          <p>
            Kieran is inspired by indie rock bands, 90s clothing styles, ligne
            claire (French clear line), Russian children's book illustrations,
            and button-up shirts that fit just right. He carries a sketchbook
            wherever he goes to capture the moments and things that inspire him.
          </p>
          <p>
            His art is cartoonish with a level of realism, childlike but subtle,
            imbued with nostalgia and specificity, and attempts to capture the
            mundane but meaningful moments of life.{" "}
          </p>
          <h2 className={`text-2xl ${ptSerif.className}`}>Events</h2>
          <p>
            <strong>2025 - </strong>
            <i>Joslyn Spring Craft Fair,</i> Redlands, CA
          </p>
          <p>
            <strong>2025 - </strong>
            <i>Capitola Makers Market,</i> Capitola, CA
          </p>
        </div>
        <Image
          src="/images/me.jpg"
          alt="Me"
          title="Doodler my whole life"
          width={500}
          height={500}
        />
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-gray-400" />

      <div className="gap-4 mt-8 text-left md:block lg:flex">
        <div className="space-y-4 w-[650px] max-w-full">
          <h2 className={`text-3xl ${ptSerif.className}`}>Contact</h2>
          <a href="mailto:kieran.sukachevin@gmail.com">
            kieran.sukachevin@gmail.com
          </a>
        </div>
        <Image
          src="/images/adult-me.jpg"
          alt="Adult Me"
          title="Adult Me"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
