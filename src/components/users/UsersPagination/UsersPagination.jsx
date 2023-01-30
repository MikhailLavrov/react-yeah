import c from './UsersPagination.module.css';

let UsersPagination = (props) => {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  
  // * Ограничил вывод кол-ва страниц
  for (let i = 1; i <= pagesCount && i <= 10; i++) {
    pages.push(i);
  }
  
  return (
    <div className={c.users__pagination}>

      {
      pages.map(page => { 
        return <span className={props.currentPage === page && c.users__selectedPage }
                    onClick={ () => {props.onPageChange(page)} }>{page}</span>
      })
      }

    </div>
  )
}

export default UsersPagination;
