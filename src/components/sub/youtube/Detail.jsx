import Layout from '../../common/layout/Layout';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Detail() {
	const { id } = useParams();
	console.log(id);
	return <Layout title={'Detail'}>{id}</Layout>;
}

export default Detail;
