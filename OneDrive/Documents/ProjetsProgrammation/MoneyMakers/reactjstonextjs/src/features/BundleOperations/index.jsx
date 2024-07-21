import React from 'react'

import * as styled from './style'
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'
import { useLanguage } from '../../context/LanguageContext'

export default function BundleOperations() {

    const { t } = useLanguage();

    return (
      <styled.WrapperOperations>
          <Filter filterField='discount' options={[
              {value : 'all', label : t('operations.filter.all')},
              {value : 'free' , label : t('operations.filter.free')},
              {value : 'popular' , label : t('operations.filter.popular')},
              {value : 'student' , label : t('operations.filter.student')},
              {value : 'personal', label: t('operations.filter.personal')},
              {value : 'pme', label: t('operations.filter.small_business')}
          ]}/>
      
          <SortBy options={[
              {value  : 'none', label: t('operations.sort.default')},
              {value  : 'name-asc', label: t('operations.sort.nameAZ')},
              {value  : 'name-desc', label: t('operations.sort.nameZA')},
              {value  : 'price-asc', label: t('operations.sort.price_asc')},
              {value  : 'price-desc', label: t('operations.sort.price_des')}
          ]}/>
      </styled.WrapperOperations>
    )
  }
