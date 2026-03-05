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
            Kieran Sukachevin is an artist, illustrator, painter, and
            independent printer currently living in Southern California. Kieran
            has been doodling his whole life but began focusing seriously on
            painting in 2022 after graduating from university.
          </p>
          <p>
            He is inspired by indie rock bands, 90s clothing styles, ligne
            claire, Russian children's book illustrations, and button-up shirts
            that fit just right. He carries a sketchbook wherever he goes to
            capture the moments and scenes that show up in his work.
          </p>
          <p>
            Hi art is cartoonish with a level of realism, childlike but subtle,
            imbued with nostalgia and specificity, and attempts to capture the
            mundane but meaningful moments of life.
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
          <h2 className={`text-2xl ${ptSerif.className}`}>Showing</h2>
          <p>
            <strong>2026 - </strong>
            <i>Artlands,</i> Redlands, CA
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
