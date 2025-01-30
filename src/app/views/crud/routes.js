import AddressRoutes from "./address/routes";
import BranchRoutes from "./branch/routes";
import CategoryRoutes from "./category/routes";
import CityRoutes from "./city/routes"
import CustomerRoutes from "./customer/routes"
import DailyClosing from "./dailyClosing/routes"
import DepartmentRoutes from "./department/routes"
import EmployeeRoutes from "./employee/routes"
import InstallmentRoutes from "./installment/routes"
import InvoiceRoutes from "./invoice/routes"
import ManagerRoutes from "./manager/routes"
import MonthlyClosingRoutes from "./monthlyClosing/routes"
import OrderRoutes from "./order/routes"
import ProductRoutes from "./product/routes"
import PurchaseRoutes from "./purchase/routes"
import SaleRoutes from "./sale/routes"
import ShoppingCartRoutes from "./shoppingCart/routes"
import SupplierRoutes from "./supplier/routes"

const crudRoutes = [
    ...AddressRoutes,
    ...BranchRoutes,
    ...CategoryRoutes,
    ...CityRoutes,
    ...CustomerRoutes,
    ...DailyClosing,
    ...DepartmentRoutes,
    ...EmployeeRoutes,
    ...InstallmentRoutes,
    ...InvoiceRoutes,
    ...ManagerRoutes,
    ...MonthlyClosingRoutes,
    ...OrderRoutes,
    ...ProductRoutes,
    ...PurchaseRoutes,
    ...SaleRoutes,
    ...ShoppingCartRoutes,
    ...SupplierRoutes
]

export default crudRoutes;