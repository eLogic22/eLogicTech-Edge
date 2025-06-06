import React from 'react'

interface ListData {
    leftTitle: string;
    rightDes: string;
    cardList:cardList[]
  }

  interface cardList{
    pointName: string
  }
  
  interface CulturedPointsProps {
    listData: ListData[];
  }

  const CulturedPoints: React.FC<CulturedPointsProps> = ({ listData }) => {
  return (
    <>
        <ul className='list-none'>
            {listData.map((data,index)=>(
                <li key={index} className='group border-t border-t-[rgba(255,255,255,0.5)] 2xl:pt-[25px] xl:pt-[20px] lg:pt-[20px] md:pt-[7px] pt-[18px] xl:pb-[15px] lg:pb-[11.5px] flex justify-between text-white 2xl:text-[24px] lg:text-[18px] text-base md:flex-nowrap flex-wrap'>
                    <div className='font-semibold capitalize pe-[15px] 2xl:w-[355px] xl:w-[265px] lg:w-[220px] md:w-[165px] w-full'>{data.leftTitle}</div>
                    <div className='font-normal 2xl:w-[335px] xl:w-[calc(100%_-_325px)] lg:w-[calc(100%_-_250px)] md:w-[calc(100%_-_0px)] w-full 2xl:h-[150px] xl:h-[110px] md:h-[108px] h-auto md:pb-0 pb-5 md:mt-0 mt-3 group-first-of-type:max-[1650px]:!h-[175px] max-[1650px]:!w-[315px] group-first-of-type:max-[1535px]:!h-[110px] max-[1535px]:!w-[255px] max-[1279px]:!w-[228px] group-first-of-type:max-[830px]:!h-auto max-[830px]:!h-auto max-[830px]:!pb-3 max-[767px]:!pb-[18px]'>
                      <ol className='list-disc list-outside 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] leading-[1.55] 2xl:ps-[17px] ps-[13px]'>
                        {data.cardList.map((item,subindex)=>(
                            <li key={subindex}>
                                {item.pointName}
                            </li>
                        ))}
                      </ol>
                    </div>
                </li>
            ))}
        </ul>
    </>
  )
}

export default CulturedPoints