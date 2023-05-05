/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import { HomeOutlined } from '@ant-design/icons';
import { BreadWrapper, BreadIList, BreadItem } from "./index.styles";

interface Props {
    path: string;
}

function NavBreadcrumb({ path }: Props) {
    const [paths,setPaths] = useState<string[]>([""])
    
    useEffect(() => {
        setPaths([...paths, ...path.replace(/^\/+/, '').split('/')])
    },[])
    
    return (
        <BreadWrapper>
            <BreadIList>
                {paths.map((item, index) => {
                    return (
                        <BreadItem key={index}>
                            <Link  
                                href={ index === (paths.length -1) ? path : `/${item}`} className="link">
                                { item ? `/ ${item}` : <HomeOutlined />}
                            </Link>
                        </BreadItem>
                    )
                })}
            </BreadIList>
        </BreadWrapper>
    );
}

export default memo(NavBreadcrumb);
