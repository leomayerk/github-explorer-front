import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
	repository: string;
}

const Repository: React.FC = () => {
	const { params } = useRouteMatch<RepositoryParams>();

	return (
		<>
			<Header>
				<img src={logoImg} alt="Github Explorer" />
				<Link to='/'>
					<FiChevronLeft size={16} />
                    Voltar
                </Link>
			</Header>

			<RepositoryInfo>
				<header>
					<img src="https://avatars2.githubusercontent.com/u/55405433?s=460&u=89b2aeda991c6d6c186c97b1bd7fc87eeaa6dd1f&v=4" alt="teste"></img>
					<div>
						<strong>leomayerk/go-barber</strong>
						<p>descrição do repositório</p>
					</div>
				</header>
				<ul>
					<li>
						<strong>1808</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>56</strong>
						<span>Forks</span>
					</li>
					<li>
						<strong>67</strong>
						<span>Issues abertas</span>
					</li>
				</ul>
				<ul></ul>
			</RepositoryInfo>

			<Issues>
				{/* {repositories.map(repository => ( */}
				<Link to={`sdafsdafsdf`}>
					<div>
						<strong>repository.full_name</strong>
						<p>repository.description</p>
					</div>
					<FiChevronRight size={20} />
				</Link>
				{/* ))} */}
			</Issues>
		</>
	);
};

export default Repository;