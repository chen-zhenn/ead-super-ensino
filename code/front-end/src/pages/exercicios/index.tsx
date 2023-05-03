import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import NavBreadcrumb from "@/presentation/components/breadcrumb";

interface INavItems {
  title: React.ReactNode | string;
  href: React.ReactNode | string;
}

function Exercises() {
  const router = useRouter();
  const { pathname } = router;
  const [nav, setNav] = useState<INavItems[]>([]);

  useEffect(() => {
    setNav([
        {
          title: pathname,
          href: pathname
        }])
  },[pathname]);

  return (
    <>
      <h2>Lista todos exercícios...</h2>
      <NavBreadcrumb items={nav} />
    </>
  );
}

export default memo(Exercises);
