import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Image from "next/image";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <header className="gome-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user="Guest"
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
}
