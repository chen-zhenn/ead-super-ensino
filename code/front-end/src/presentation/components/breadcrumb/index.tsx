/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from '@ant-design/icons';

interface links {
    title: React.ReactNode | string 
}

interface items extends links {
  href: React.ReactNode | string
};

interface Props {
  items: items[];
}

function NavBreadcrumb({ items }: Props) {
    const [links,setLinks] = useState<links[]>([])

    const strLinks = (pathname:React.ReactNode|string|null) => `${pathname}`
    const strSlash = (pathname:string) => /\//.test(pathname) 
    const strPath = (pathname:string) =>  strSlash(pathname) ? pathname.split("/")[1] : pathname
    const strHref = (pathname:string) => strSlash(pathname) ? `/${strPath(pathname)}` : strPath(pathname) 

    useEffect(() => {
        const newLinks = [{title: <Link href="/" ><HomeOutlined /></Link>}]
        const notAllPaths = items.find(item => !item.title) 
        if(!notAllPaths) for(let item of items) newLinks.push({ title: <Link href={`${strHref(strLinks(item.title))}`}>{strPath(strLinks(item.title))}</Link>})
        setLinks(newLinks)
    },[items])
    

    return (
        <aside style={{marginBottom:'1.5rem', paddingLeft:'0.625rem'}}>
            <Breadcrumb items={links} />
        </aside>
    );
}

export default memo(NavBreadcrumb);
