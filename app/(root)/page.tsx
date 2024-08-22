import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Image from "next/image";
import RightSidebar from "../../components/RightSidebar";

export default function Home() {
  const loggedIn = {
    firstName: "adrian",
    lastName: "jsm",
    email: "ahmedcharfeddine75@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
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
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 231.12 }, { currentBalance: 342.3 }]}
      />
    </section>
  );
}
