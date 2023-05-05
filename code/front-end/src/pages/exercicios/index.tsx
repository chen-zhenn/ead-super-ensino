import { useRouter } from "next/router";
import { memo } from "react";
import NavBreadcrumb from "@/presentation/components/breadcrumb";


function Exercises() {
  const router = useRouter();
  const { asPath } = router;
  
  return (
    <>
      <h2>Lista todos exercícios...</h2>
      <NavBreadcrumb path={asPath} />
    </>
  );
}

export default memo(Exercises);
