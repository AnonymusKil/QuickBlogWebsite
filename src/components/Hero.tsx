import type { ReactNode } from "react";

type Heroprops = {
children: ReactNode
}
function Hero({children}: Heroprops) {
  return (
    <section>
      <div className="text-center mt-14 sm:mt-20 mb-8 px-4 max-w-3xl mx-auto">
        {children}
      </div>
    </section>
  );
}
export default Hero;
