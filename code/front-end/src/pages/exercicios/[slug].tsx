import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Breadcrumb, message, Steps, theme, Button, Checkbox } from "antd";
import { HomeOutlined } from '@ant-design/icons';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Context from "@/presentation/contexts/exercicios";
import { IExercise } from "@/domain/models/IExercise";

export default function () {
  const { exercicios } = useContext(Context);
  const [data, seData] = useState<IExercise[]>([]);
  const [content, seContent] = useState<boolean>(false);
  const [current, setCurrent] = useState(0);
  const { token } = theme.useToken();
  const router = useRouter();
  const { slug } = router.query;

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    seData(exercicios.filter((item) => item.disciplina === slug));
  }, [exercicios]);

  useEffect(() => {
    if (data && data.length) seContent(true);
  }, [data]);

  const contentStyle: React.CSSProperties = {
    lineHeight: "initial",
    textAlign: "left",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    paddingLeft: '1rem'
  };

  return (
    <>
      <h2>Exercício - {slug}</h2>
      <aside style={{marginBottom:'1.5rem', paddingLeft:'0.625rem'}}>
        <Breadcrumb items={[{
            title: <Link href="/" passHref><HomeOutlined /></Link>
      },{
        title: <span>Exercícios</span>
      },{
        title: <span>{slug}</span>
      }]} />
      </aside>
      <Steps
        current={current}
        items={data.map((item, index) => ({ key: index, title: item.tema }))}
      />
      {content && <div style={contentStyle}>{
        <>
            <hgroup>
                <h4 style={{lineHeight:'initial'}}>{data[current].subtema}</h4>
                <h3 style={{lineHeight:'initial'}}>{data[current].questao.enunciado.objetivo}</h3>
                <h4 style={{lineHeight:'initial'}}>
                    {data[current].questao.enunciado.titulo.replace(".", ":")}
                </h4>
            </hgroup>

            <ul style={{listStyleType:'none', marginLeft:'unset', paddingLeft:'unset'}}>
                {data[current].questao.enunciado.opcoes
                    .map((item,index) => <li 
                    key={index} 
                    style={{lineHeight:'1.5rem'}}>{item.texto}</li>)
                }
            </ul>
            <ul style={{listStyleType:'none', marginLeft:'unset', paddingLeft:'unset'}}>
                {data[current].questao.alternativas
                    .map(item => <li 
                    key={item.id} 
                    style={{display:'flex', alignItems:'center', lineHeight:'1.5rem'}}>
                        <Checkbox onChange={onChange}>
                            <b>{item.letra}</b>
                        </Checkbox>
                        <p style={{display:'inline-block', marginLeft:'0.65rem'}}>{item.texto}</p>
                    </li>)
                }
            </ul>
        </>

      }</div>}

        <div style={{ marginTop: 24, textAlign:'center' }}>
            {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                </Button>
            )}
            {current < data.length - 1 && (
            <Button type="primary" onClick={() => next()}>
                Next
            </Button>
            )}
            {current === data.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
            </Button>
            )}
        </div>
    </>
  );
}
