import HeaderButton from '@/components/common/HeaderButton';
import React from 'react';

function EditCategoryHeaderRight(onSubmit: () => void) {
  return <HeaderButton labelText="저장" onPress={onSubmit} />;
}

export default EditCategoryHeaderRight;
