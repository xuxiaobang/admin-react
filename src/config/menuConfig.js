import {
    HomeOutlined,
    AppstoreOutlined,
    BarsOutlined,
    MenuOutlined,
    UserOutlined,
    SafetyOutlined,
    AreaChartOutlined,
    BarChartOutlined,
    LineChartOutlined,
    PieChartOutlined
} from '@ant-design/icons';

export default [
    {
        title: "首页",   // 标题
        key: "/home",    // 对应的path路径
        icon: HomeOutlined,  // 对应的图标
        isPublic: true       // 是不是公开的
    },
    {
        title: "商品",
        key: "/products",
        icon: AppstoreOutlined,
        children: [  // 子菜单
            {
                title: "品类管理",
                key: "/category",
                icon: BarsOutlined,
            },
            {
                title: "商品管理",
                key: "/product",
                icon: MenuOutlined,
            }
        ]
    },
    {
        title: "用户管理",
        key: "/user",
        icon: UserOutlined
    },
    {
        title: "角色管理",
        key: "/role",
        icon: SafetyOutlined
    },
    {
        title: "图形图标",
        key: "/charts",
        icon: AreaChartOutlined,
        children: [  // 子菜单
            {
                title: "柱状图",
                key: "/charts/bar",
                icon: BarChartOutlined,
            },
            {
                title: "折线图",
                key: "/charts/line",
                icon: LineChartOutlined,
            },
            {
                title: "饼状图",
                key: "/charts/pie",
                icon: PieChartOutlined,
            }
        ]
    }
]
