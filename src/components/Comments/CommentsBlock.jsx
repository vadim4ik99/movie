import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import CommentForm from './CommentForm/CommentForm';
import './CommentsBlock.css'
import Comment from './OneComment/Comment';
import PaginationUI from '../PaginationUI/PaginationUI';

function CommentsBlock({name}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20; // Замените на фактическое количество страниц

  const handlePageChange = (page) => {
    // Здесь вы можете обработать изменение страницы, например, загрузить данные для новой страницы
    setCurrentPage(page);
  };

  return (
    <Row className='commentsBlock'> 
      <CommentForm/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <PaginationUI
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Row>
  );
}

export default CommentsBlock;