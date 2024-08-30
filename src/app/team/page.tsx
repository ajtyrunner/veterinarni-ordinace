import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import OpeningHours from '@/components/OpeningHours';

export default function Team() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto p-8 flex-grow">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Náš tým</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="MVDr. Lucia Friedlaenderová" 
              role="veterinární lékařka"
              description={`Absolventka VFU – Fakulty veterinárního lékařství v Brně.
              Specializuje se na interní medicínu malých a exotických zvířat s užším zaměřením na oftalmologii.
              2005-2009 zaměstnaná na veterinární klinice Lazy ve Zlíně.
              Absolvovala studijní stáže se zaměřením na oftalmologii:
              -Veterinární klinika MVDr. Jiří Beránek, Pardubice
              -VFU Brno, Oddělení oftalmologie
              -Veterinární klinika MVDr. Pavla Trnková, Brno.
              Má doma fenku Zero a kočku Maggie. Jejím koníčkem je horská turistika, běhání a dálkové pochody.`} 
              imageUrl="/images/MVDr_Lucia_Friedlaenderova_m.jpg" // Přidána URL fotky
            />
            <TeamMember 
              name="MVDr. Jana Ambruzová" 
              role="veterinární lékařka"
              description={`Absolventka VFU – Fakulty veterinárního lékařství v Brně.
              Specializuje se na interní medicínu malých zvířat s užší specializací na cytologii a kardiologii.
              Absolvovala měsíční stáž na klinice pro malá zvířata v Lustenau, Rakousko.
              Má doma Jack Russela a černobílého psokoně a dále další hromadu zvířat jako koně, poníka atd.
              Jejím koníčkem je jízda na koni, plavání a dobré jídlo.`} 
              imageUrl="/images/MVDr_Jana_Starostikova.jpg" // Přidána URL fotky
            />
            <TeamMember 
              name="Renata Šillerová" 
              role="veterinární sestra"
              description={`Členka ČAVS /Česká asociace veterinárních sester/.
              Má doma kočičku Adélku.`} 
              imageUrl="/images/Renata-sillerová.jpg" // Přidána URL fotky
            />
          </div>
        </div>
      </div>
      <OpeningHours />
      <Footer />
    </>
  );
}
