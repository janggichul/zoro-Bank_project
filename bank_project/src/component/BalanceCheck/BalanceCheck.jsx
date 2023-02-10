import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import dummy from '../../data/dummy.json';
import Pagination from 'react-js-pagination';
import { useEffect } from 'react';
import ActivePage from './ActivePage';
import './BalanceCheck.css';
import { useNavigate } from 'react-router-dom';

export default function BalanceCheck() {
  const [page, setPage] = useState(1);
  const [activePage, setActivePage] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [data, setData] = useState(dummy.inquiry);

  const result = dummy.inquiry.find((el) => el !== undefined);
  const navigate = useNavigate();

  const getData = () => {
    const result = dummy.inquiry.sort((a, b) => b.num - a.num);
    setActivePage(result);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const indexOfLast = page * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (activePage) => {
    let currentPosts = 0;
    currentPosts = data.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  const hnadleAllButton = () => {
    const listFilter = activePage.filter((aa) => aa);
    setData(listFilter);
  };
  const hnadleDepositButton = () => {
    const listFilter = activePage.filter((aa) => aa.amt > 1);
    setData(listFilter);
  };
  const hnadleWithdrawalButton = () => {
    const listFilter = activePage.filter((aa) => aa.amt < 1);
    setData(listFilter);
  };

  const handleBackButton = () => {
    navigate('/bank');
  };

  useEffect(() => {
    getData({ activePage: page, data });
  }, [page, data]);

  return (
    <>
      <section class="bg-gray-50 mx-auto mt-6 max-w-[450px]">
        <div class="p-4 rounded-md">
          <button
            class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            onClick={handleBackButton}
          >
           <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
          </button>

          <ul class="text-xs font-bold text-gray-700">
            <li>{`제로은행 ${localStorage.getItem('account')}`}</li>
            <li class="text-4xl ">
              {result.curamt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </li>
          </ul>
        </div>
        <div class="flex items-center mx-4">
          <button
            onClick={hnadleAllButton}
            class=" mb-2 w-12 bg-indigo-400 h-max rounded-lg text-white font-bold hover:bg-indigo-300"
          >
            전체
          </button>
          <button
            onClick={hnadleDepositButton}
            class="ml-2 mb-2 w-12 bg-indigo-400 h-max rounded-lg text-white font-bold hover:bg-indigo-300 "
          >
            입금
          </button>
          <button
            onClick={hnadleWithdrawalButton}
            class="mx-2 mb-2 w-12 bg-indigo-400 h-max rounded-lg text-white font-bold hover:bg-indigo-300 "
          >
            출금
          </button>
        </div>
        <div class="border-t">
          <ActivePage posts={currentPosts(activePage)} />
        </div>
      </section>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={postsPerPage}
        totalItemsCount={activePage.length}
        pageRangeDisplayed={5}
        prevPageText={'‹'}
        nextPageText={'›'}
        onChange={handlePageChange}
      />
    </>
  );
}
