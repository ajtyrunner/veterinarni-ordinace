import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobListing from '@/components/JobListing';
import OpeningHours from '@/components/OpeningHours';

export default function Career() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto p-8 flex-grow">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Kariéra</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
            <JobListing
              title="‼️ HLEDÁME POSILU DO NAŠEHO TÝMU ‼️"
              sections={[
                {
                  heading: 'Koho hledáme?',
                  content: [
                    'Veterinární sestru/bratra s láskou ke psům, kočkám i drobným savcům.',
                    'Někoho, kdo zvládne asistovat u zákroků, poradit páníčkům a udržet klid i ve chvílích, kdy to v čekárně vrní, štěká a piští zároveň.',
                    'Milovníka organizace – protože i v chaosu musí být systém.',
                  ],
                },
                {
                  heading: 'Co nabízíme?',
                  content: [
                    'Nástup od 1.6.2025.',
                    'Práci na plný úvazek.',
                    'Práci v týmu, který se směje i po náročné směně.',
                    'Možnost učit se a růst (a občas si pochovat ježka nebo fretku).',
                    'Férové ohodnocení a pohodu mezi zvířaty.',
                    'Stylové pracovní oblečení s obrázky zvířátek – protože i pracovní uniforma může být roztomilá! 🐶🐱🐰',
                  ],
                },
                {
                  heading: 'Kontakt',
                  content: [
                    '📩 Zaujalo tě to? Napiš nám na veterina-svahy@email.cz, příp.737518187 nebo se rovnou stav na kus řeči!',
                  ],
                },
              ]}
              imageUrl="https://lh3.googleusercontent.com/d/1KnEEXksRiisWfGc7GNMStOIUkXb0QqOC"
            />

            <JobListing
              title="Hledá se veterinář/ka /může být i junior/: Krotitel koček a uklidňovač křečků"
              sections={[
                {
                  heading: 'Kdo jsme',
                  content: [
                    'Jsme Veterina Svahy, místo, kde jsou pacienti chlupatí, opeření i šupinatí a občas nás překvapí něcím, co nás ani ve škole neučili.',
                    'Naše ordinace je plná smíchu, lásky ke zvířatům a občas i létajících peříček.',
                  ],
                },
                {
                  heading: 'Co budete dělat',
                  content: [
                    'Přesvědčovat tvrdohlavé králíky, že mrkev po zákroku chutná lépe.',
                    'Uklidňovat nervózní páníčky, kteří jsou nervóznější než jejich mazlíčci.',
                    'Spolupracovat s týmem, který ocení váš smysl pro humor a odolnost vůči psímu smutnému pohledu.',
                  ],
                },
                {
                  heading: 'Co od vás očekáváme',
                  content: [
                    'Vzdělání v oboru veterinární medicíny.',
                    'Odolnost vůči chlupům ve všech částech vašeho oblečení.',
                    'Lásku k zvířatům všech velikostí a druhů.',
                    'Ochotu pracovat i v sobotu dopoledne, ale nebojte, jenom jednou za 14 dní.',
                  ],
                },
                {
                  heading: 'Co nabízíme',
                  content: [
                    'Práci v kolektivu, kde je každý den novým dobrodružstvím.',
                    'Možnost povýšení na seniorního krotitele.',
                    'Neomezený přístup k pamlskům.',
                    'Stylový pracovní oděv s motivem tlapek.',
                    'Žádné pohotovosti ani noční směny.',
                  ],
                },
                {
                  heading: 'Jak se přihlásit',
                  content: [
                    'Pošlete nám svůj životopis na veterina-svahy@email.cz. Těšíme se na Vás (a naši pacienti také)!',
                  ],
                },
              ]}
              imageUrl="https://lh3.googleusercontent.com/d/1NPJIMmkznQt7eW76P_AxB7TFJUSAe7Yg"
            />
          </div>
        </div>
        <OpeningHours />
      </div>
      <Footer />
    </>
  );
}
