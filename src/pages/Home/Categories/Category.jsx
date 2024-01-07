
import React from 'react';
import Container from '../../../components/Shared/Container';
import { categories } from './Categories';
import CategoryBox from './CategoryBox';
import { useSearchParams } from 'react-router-dom';

const Category = () => {
    const [params] = useSearchParams();
    const category = params.get('category');
    
    return (
        <Container>
            <div className='pt-4 flex justify-between items-center overflow-x-auto'>
            {
                categories?.map(item => <CategoryBox 

                    key={item.label} 
                    label={item.label} 
                    icon={item.icon}
                    selected={category === item.label}
                    >   
                    </CategoryBox>)
            }
            </div>
        </Container>
    );
};

export default Category;