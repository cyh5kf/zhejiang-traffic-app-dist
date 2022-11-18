const n=`query ($where: traffic_tourism_route_manage_bool_exp!, $order_by: [traffic_tourism_route_manage_order_by!]!) {
  list: traffic_tourism_route_manage(where: $where, order_by: $order_by) {
    createTime
    id
    introduce
    isDel
    mileage
    organizationCode
    recommendStatus
    relationPicType
    updateTime
    status
    season
    routeType
    routeName
    routeManageLinkPic {
      url
      type
      relationType
      relationId
    }
    routeManageCodeLinkOrg {
      name
    }
  }
}
`,e=`query ($limit: Int = 10, $offset: Int = 10, $order_by: [traffic_tourism_route_strategy_order_by!]!, $where: traffic_tourism_route_strategy_bool_exp!) {
  list: traffic_tourism_route_strategy(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    strategyTitleLittle
    strategyTitle
    picUrl
    id
    content
  }
}`,t=`query ($limit: Int = 10, $offset: Int = 10, $order_by: [traffic_tourism_route_manage_order_by!]!, $where: traffic_tourism_route_manage_bool_exp!,$where1: traffic_tourism_route_attractions_bool_exp!) {
  list: traffic_tourism_route_manage(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    id
    introduce
    mileage
    organizationCode
    recommendStatus
    relationPicType
    routeName
    routeType
    season
    status
    pathJson
    routeManageLinkPic {
      url
      type
    }
    clockPointCount: routeManageLinkAttractions_aggregate(where: $where1) {
      aggregate {
        count(columns: id)
      }
    }
  }
}`,r=`query ($where: traffic_tourism_route_manage_bool_exp!) {
  traffic_tourism_route_manage(where: $where) {
    status
    season
    routeType
    routeName
    relationPicType
    recommendStatus
    organizationCode
    mileage
    introduce
    id
    routeManageLinkPic {
      url
      type
    }
    routeManageLinkAttractions {
      attractionsName
      attractionsShort
      introduce
      latitude
      longitude
      routeAttLinkPic {
        url
        type
      }
    }
    routeManageLinkFood {
      businessTimeEnd
      address
      businessTimeStart
      consumption
      foodName
      id
      introduce
      otherInfo
      phone
      relationPicType
      routeManageId
      foodLinkPic {
        url
        type
      }
      foodLinkRecommend {
        recommendName
        foodRecommendLinkPic {
          url
          type
        }
      }
    }
    routeManageLinkHotel {
      address
      hotelName
      hotelType
      instructions
      introduce
      otherInfo
      phone
      priceHigh
      priceLow
      specification
      hotelLinkPic {
        url
        type
      }
    }
  }
}

`;export{n as R,e as S,t as a,r as b};
