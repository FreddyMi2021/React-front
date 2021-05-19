import React from 'react';
import ListDoc from './Content/ListDoc/ListDoc';
import ListPaiement from './Content/ListPaiement/ListPaiement';
import BasicInformations from './Content/BasicInfo/BasicInformations';
const Menu = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-4 block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-' + color + '-700'
                    : 'text-' + color + '-500 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                basic information
              </a>
            </li>

            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-4 block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-' + color + '-700'
                    : 'text-' + color + '-500 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                My payments
              </a>
            </li>
            {/* li */}
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-4 block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-' + color + '-700'
                    : 'text-' + color + '-500 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                My Documents
              </a>
            </li>
          </ul>
          <div className="relative  h-screen pb-64 md:overflow-auto flex flex-col min-w-0 break-words bg-white w-full mb-6">
            <div className="py-5 flex-auto ">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <BasicInformations />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <ListPaiement />
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <ListDoc />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Menu color="green" />
    </>
  );
}
