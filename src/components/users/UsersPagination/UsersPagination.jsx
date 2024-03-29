import { useDispatch } from 'react-redux';
import c from './UsersPagination.module.scss';
import { setCurrentPage, getUsers } from '../../../redux/usersReducer';

let UsersPagination = (props) => {
  const dispatch = useDispatch();

  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const onPageChange = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(getUsers(page, props.pageSize));
  }
  
  // * Ограничил вывод кол-ва страниц
  // for (let i = 1; i <= pagesCount && i <= 10; i++) {
  //   pages.push(i);
  // }
  
  return (
    <div className={c.users__pagination}>
      {pages.map(page => { 
        return (
          <span className={props.currentPage === page 
                  ? c.users__selectedPage 
                  : undefined } 
                key={page.toString()}
                onClick={() => {onPageChange(page)}}
                >
                {page}</span>)
      })}
    </div>
  )
}

export default UsersPagination;
