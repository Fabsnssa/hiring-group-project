"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Trash2, Pencil, Users, FileText, Shield, Building2, UserCheck, DollarSign } from "lucide-react"

export default function AdminDashboard() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan@hiringgroup.com",
      role: "Hiring Group",
      status: "Activo",
      lastLogin: "2024-01-20",
    },
    {
      id: 2,
      name: "María García",
      email: "maria@techcorp.com",
      role: "Empresa",
      status: "Activo",
      lastLogin: "2024-01-19",
    },
    {
      id: 3,
      name: "Carlos López",
      email: "carlos@email.com",
      role: "Candidato",
      status: "Activo",
      lastLogin: "2024-01-20",
    },
  ])

  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "TechCorp Solutions",
      rif: "J-12345678-9",
      address: "Av. Principal 123",
      phone: "0212-1234567",
      sector: "Tecnología",
      registerDate: "2024-01-15",
      status: "Activo",
      sectorId: 1,
    },
    {
      id: 2,
      name: "FinanceInc",
      rif: "J-87654321-0",
      address: "Calle Comercio 456",
      phone: "0414-9876543",
      sector: "Finanzas",
      registerDate: "2024-01-10",
      status: "Activo",
      sectorId: 2,
    },
  ])

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Desarrollador Frontend",
      company: "TechCorp",
      profession: "Ing. Sistemas",
      salary: "$1,200",
      applications: 15,
      status: "Activa",
      created: "2024-01-15",
    },
    {
      id: 2,
      title: "Contador Senior",
      company: "FinanceInc",
      profession: "Contaduría",
      salary: "$1,500",
      applications: 8,
      status: "Activa",
      created: "2024-01-14",
    },
  ])

  const [applications, setApplications] = useState([
    {
      id: 1,
      candidate: "Carlos López",
      candidateEmail: "carlos@email.com",
      job: "Desarrollador Frontend",
      company: "TechCorp",
      appliedDate: "2024-01-16",
      status: "En revisión",
    },
    {
      id: 2,
      candidate: "Ana Rodríguez",
      candidateEmail: "ana@email.com",
      job: "Contador Senior",
      company: "FinanceInc",
      appliedDate: "2024-01-15",
      status: "Entrevista",
    },
  ])

  const [contracts, setContracts] = useState([
    {
      id: 1,
      employee: "Ana Rodríguez",
      company: "TechCorp",
      position: "Desarrolladora Frontend",
      salary: "$1,200",
      startDate: "2024-01-01",
      contractType: "Indefinido",
      status: "Activo",
    },
    {
      id: 2,
      employee: "Miguel Torres",
      company: "FinanceInc",
      position: "Contador",
      salary: "$1,500",
      startDate: "2023-12-01",
      contractType: "1 año",
      status: "Activo",
    },
  ])

  const [payrolls, setPayrolls] = useState([
    {
      id: 1,
      company: "TechCorp",
      month: "Enero 2024",
      employees: 12,
      grossTotal: "$14,400",
      deductions: "$936",
      netTotal: "$13,464",
      status: "Procesada",
    },
    {
      id: 2,
      company: "FinanceInc",
      month: "Enero 2024",
      employees: 8,
      grossTotal: "$12,000",
      deductions: "$780",
      netTotal: "$11,220",
      status: "Pendiente",
    },
  ])

  const [systemData, setSystemData] = useState([
    { id: 1, type: "Banco", name: "Banco de Venezuela", code: "0102", category: "Bancario", status: "Activo" },
    {
      id: 2,
      type: "Profesión",
      name: "Ingeniería en Sistemas",
      code: "ING001",
      category: "Ingeniería",
      status: "Activo",
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-red-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Panel Administrador</h1>
                <p className="text-sm text-gray-600">Sistema Hiring Group - Control Total</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Usuario: admin@hiringgroup.com</span>
              <Button variant="outline" size="sm">
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Usuarios</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-muted-foreground">todos los tipos de usuario</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Empresas Registradas</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{companies.length}</div>
              <p className="text-xs text-muted-foreground">empresas clientes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ofertas Activas</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{jobs.filter((job) => job.status === "Activa").length}</div>
              <p className="text-xs text-muted-foreground">de {jobs.length} ofertas totales</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Empleados Contratados</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {contracts.filter((contract) => contract.status === "Activo").length}
              </div>
              <p className="text-xs text-muted-foreground">contratos activos</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="users">Usuarios</TabsTrigger>
            <TabsTrigger value="companies">Empresas</TabsTrigger>
            <TabsTrigger value="jobs">Ofertas</TabsTrigger>
            <TabsTrigger value="applications">Postulaciones</TabsTrigger>
            <TabsTrigger value="contracts">Contratos</TabsTrigger>
            <TabsTrigger value="payroll">Nóminas</TabsTrigger>
          </TabsList>

          {/* Usuarios Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Gestión de Usuarios</CardTitle>
                    <CardDescription>Administra todos los usuarios del sistema</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Nuevo Usuario
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Crear Nuevo Usuario</DialogTitle>
                        <DialogDescription>Completa la información para crear un nuevo usuario</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nombre Completo</Label>
                            <Input id="name" placeholder="Ej: Juan Pérez" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Ej: juan@email.com" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Rol de Usuario</Label>
                          <Input id="role" placeholder="Ej: Hiring Group, Empresa, Candidato" />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline">Cancelar</Button>
                          <Button>Crear Usuario</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
            </Card>

            <div className="bg-white shadow-sm border-b p-3">
              <div className="p-3">
                <CardTitle>Listado General de Usuarios</CardTitle>
                <CardDescription>Información general de todos los usuarios del sistema</CardDescription>
              </div>
              <table className="m-1 mb-3 rounded-md shadow-sm text-sm">
                <thead className="bg-sky-100 border-b-2 border-gray-300 px-2 py-3">
                  <tr className="grid grid-cols-10 gap-4 px-2 py-3">
                    <th className="font-semibold text-center col-span-1">ID</th>
                    <th className="font-semibold text-center col-span-2">Nombre</th>
                    <th className="font-semibold text-center col-span-3">Email</th>
                    <th className="font-semibold text-center col-span-1">Rol</th>
                    <th className="font-semibold text-center col-span-1">Estado</th>
                    <th className="font-semibold text-center col-span-1">Último Acceso</th>
                    <th className="font-semibold text-center col-span-1">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="grid grid-cols-10 gap-4 border-b-2 border-gray-300 px-1 py-2 rounded-md"
                    >
                      <td className="text-center col-span-1">{user.id.toString().padStart(3, "0")}</td>
                      <td className="text-center col-span-2">{user.name}</td>
                      <td className="text-center col-span-3">{user.email}</td>
                      <td className="text-center col-span-1">{user.role}</td>
                      <td className="text-center col-span-1">{user.status}</td>
                      <td className="text-center col-span-1">{user.lastLogin}</td>
                      <td className="flex gap-2 px-1 py-1">
                        <button className="bg-[#f83333] hover:bg-[#f54949] rounded-sm p-1 transition duration-200">
                          <Pencil className="h-4 w-4 text-white" />
                        </button>
                        <button className="bg-[#34c274] hover:bg-[#42d685] rounded-sm p-1 transition duration-200">
                          <Trash2 className="h-4 w-4 text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Empresas Tab */}
          <TabsContent value="companies" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Gestión de Empresas</CardTitle>
                    <CardDescription>Administra todas las empresas clientes</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Nueva Empresa
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Registrar Nueva Empresa</DialogTitle>
                        <DialogDescription>
                          Completa la información para registrar una nueva empresa cliente
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="company-name">Nombre de la Empresa</Label>
                            <Input id="company-name" placeholder="Ej: TechCorp Solutions" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="rif">RIF</Label>
                            <Input id="rif" placeholder="Ej: J-12345678-9" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Dirección</Label>
                          <Input id="address" placeholder="Dirección completa" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Teléfono</Label>
                            <Input id="phone" placeholder="0212-1234567" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="sector">Sector</Label>
                            <Input id="sector" placeholder="Ej: Tecnología" />
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline">Cancelar</Button>
                          <Button>Registrar Empresa</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
            </Card>

            <div className="bg-white shadow-sm border-b p-3">
              <div className="p-3">
                <CardTitle>Listado General de Empresas</CardTitle>
                <CardDescription>Información general de las empresas registradas</CardDescription>
              </div>
              <table className="m-1 mb-3 rounded-md shadow-sm text-sm">
                <thead className="bg-sky-100 border-b-2 border-gray-300 px-2 py-3">
                  <tr className="grid grid-cols-10 gap-4 px-2 py-3">
                    <th className="font-semibold text-center col-span-1">ID</th>
                    <th className="font-semibold text-center col-span-1">Empresa</th>
                    <th className="font-semibold text-center col-span-1">RIF</th>
                    <th className="font-semibold text-center col-span-1">Dirección</th>
                    <th className="font-semibold text-center col-span-1">Teléfono</th>
                    <th className="font-semibold text-center col-span-1">Sector</th>
                    <th className="font-semibold text-center col-span-1">Fecha Registro</th>
                    <th className="font-semibold text-center col-span-1">Status</th>
                    <th className="font-semibold text-center col-span-1">ID Sector</th>
                    <th className="font-semibold text-center col-span-1">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {companies.map((company) => (
                    <tr
                      key={company.id}
                      className="grid grid-cols-10 gap-4 border-b-2 border-gray-300 px-1 py-2 rounded-md"
                    >
                      <td className="text-center col-span-1">{company.id.toString().padStart(3, "0")}</td>
                      <td className="text-center col-span-1">{company.name}</td>
                      <td className="text-center col-span-1">{company.rif}</td>
                      <td className="text-center col-span-1">{company.address}</td>
                      <td className="text-center col-span-1">{company.phone}</td>
                      <td className="text-center col-span-1">{company.sector}</td>
                      <td className="text-center col-span-1">{company.registerDate}</td>
                      <td className="text-center col-span-1">{company.status}</td>
                      <td className="text-center col-span-1">{company.sectorId}</td>
                      <td className="flex gap-2 px-1 py-1">
                        <button className="bg-[#f83333] hover:bg-[#f54949] rounded-sm p-1 transition duration-200">
                          <Pencil className="h-4 w-4 text-white" />
                        </button>
                        <button className="bg-[#34c274] hover:bg-[#42d685] rounded-sm p-1 transition duration-200">
                          <Trash2 className="h-4 w-4 text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Ofertas Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Gestión de Ofertas Laborales</CardTitle>
                    <CardDescription>Supervisa todas las ofertas del sistema</CardDescription>
                  </div>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Exportar Reporte
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <div className="bg-white shadow-sm border-b p-3">
              <div className="p-3">
                <CardTitle>Listado General de Ofertas</CardTitle>
                <CardDescription>Información de todas las ofertas laborales</CardDescription>
              </div>
              <table className="m-1 mb-3 rounded-md shadow-sm text-sm">
                <thead className="bg-sky-100 border-b-2 border-gray-300 px-2 py-3">
                  <tr className="grid grid-cols-10 gap-4 px-2 py-3">
                    <th className="font-semibold text-center col-span-1">ID</th>
                    <th className="font-semibold text-center col-span-2">Título</th>
                    <th className="font-semibold text-center col-span-1">Empresa</th>
                    <th className="font-semibold text-center col-span-1">Profesión</th>
                    <th className="font-semibold text-center col-span-1">Salario</th>
                    <th className="font-semibold text-center col-span-1">Postulaciones</th>
                    <th className="font-semibold text-center col-span-1">Estado</th>
                    <th className="font-semibold text-center col-span-1">Fecha</th>
                    <th className="font-semibold text-center col-span-1">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {jobs.map((job) => (
                    <tr
                      key={job.id}
                      className="grid grid-cols-10 gap-4 border-b-2 border-gray-300 px-1 py-2 rounded-md"
                    >
                      <td className="text-center col-span-1">{job.id.toString().padStart(3, "0")}</td>
                      <td className="text-center col-span-2">{job.title}</td>
                      <td className="text-center col-span-1">{job.company}</td>
                      <td className="text-center col-span-1">{job.profession}</td>
                      <td className="text-center col-span-1">{job.salary}</td>
                      <td className="text-center col-span-1">{job.applications}</td>
                      <td className="text-center col-span-1">{job.status}</td>
                      <td className="text-center col-span-1">{job.created}</td>
                      <td className="flex gap-2 px-1 py-1">
                        <button className="bg-[#f83333] hover:bg-[#f54949] rounded-sm p-1 transition duration-200">
                          <Pencil className="h-4 w-4 text-white" />
                        </button>
                        <button className="bg-[#34c274] hover:bg-[#42d685] rounded-sm p-1 transition duration-200">
                          <Trash2 className="h-4 w-4 text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Postulaciones Tab */}
          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Gestión de Postulaciones</CardTitle>
                    <CardDescription>Supervisa todas las postulaciones del sistema</CardDescription>
                  </div>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Exportar Reporte
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <div className="bg-white shadow-sm border-b p-3">
              <div className="p-3">
                <CardTitle>Listado General de Postulaciones</CardTitle>
                <CardDescription>Información de todas las postulaciones realizadas</CardDescription>
              </div>
              <table className="m-1 mb-3 rounded-md shadow-sm text-sm">
                <thead className="bg-sky-100 border-b-2 border-gray-300 px-2 py-3">
                  <tr className="grid grid-cols-10 gap-4 px-2 py-3">
                    <th className="font-semibold text-center col-span-1">ID</th>
                    <th className="font-semibold text-center col-span-2">Candidato</th>
                    <th className="font-semibold text-center col-span-2">Email</th>
                    <th className="font-semibold text-center col-span-1">Oferta</th>
                    <th className="font-semibold text-center col-span-1">Empresa</th>
                    <th className="font-semibold text-center col-span-1">Fecha</th>
                    <th className="font-semibold text-center col-span-1">Estado</th>
                    <th className="font-semibold text-center col-span-1">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {applications.map((application) => (
                    <tr
                      key={application.id}
                      className="grid grid-cols-10 gap-4 border-b-2 border-gray-300 px-1 py-2 rounded-md"
                    >
                      <td className="text-center col-span-1">{application.id.toString().padStart(3, "0")}</td>
                      <td className="text-center col-span-2">{application.candidate}</td>
                      <td className="text-center col-span-2">{application.candidateEmail}</td>
                      <td className="text-center col-span-1">{application.job}</td>
                      <td className="text-center col-span-1">{application.company}</td>
                      <td className="text-center col-span-1">{application.appliedDate}</td>
                      <td className="text-center col-span-1">{application.status}</td>
                      <td className="flex gap-2 px-1 py-1">
                        <button className="bg-[#f83333] hover:bg-[#f54949] rounded-sm p-1 transition duration-200">
                          <Pencil className="h-4 w-4 text-white" />
                        </button>
                        <button className="bg-[#34c274] hover:bg-[#42d685] rounded-sm p-1 transition duration-200">
                          <Trash2 className="h-4 w-4 text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Contratos Tab */}
          <TabsContent value="contracts" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Gestión de Contratos</CardTitle>
                    <CardDescription>Administra todos los contratos de empleados</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Nuevo Contrato
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Crear Nuevo Contrato</DialogTitle>
                        <DialogDescription>Completa la información para crear un nuevo contrato</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="employee">Empleado</Label>
                            <Input id="employee" placeholder="Nombre del empleado" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Empresa</Label>
                            <Input id="company" placeholder="Empresa contratante" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="position">Cargo</Label>
                            <Input id="position" placeholder="Cargo a desempeñar" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="salary">Salario</Label>
                            <Input id="salary" placeholder="$1,200" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contract-type">Tipo de Contrato</Label>
                          <Input id="contract-type" placeholder="Indefinido, 1 año, 6 meses" />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline">Cancelar</Button>
                          <Button>Crear Contrato</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
            </Card>

            <div className="bg-white shadow-sm border-b p-3">
              <div className="p-3">
                <CardTitle>Listado General de Contratos</CardTitle>
                <CardDescription>Información de todos los contratos activos</CardDescription>
              </div>
              <table className="m-1 mb-3 rounded-md shadow-sm text-sm">
                <thead className="bg-sky-100 border-b-2 border-gray-300 px-2 py-3">
                  <tr className="grid grid-cols-10 gap-4 px-2 py-3">
                    <th className="font-semibold text-center col-span-1">ID</th>
                    <th className="font-semibold text-center col-span-2">Empleado</th>
                    <th className="font-semibold text-center col-span-1">Empresa</th>
                    <th className="font-semibold text-center col-span-1">Cargo</th>
                    <th className="font-semibold text-center col-span-1">Salario</th>
                    <th className="font-semibold text-center col-span-1">Fecha Inicio</th>
                    <th className="font-semibold text-center col-span-1">Tipo</th>
                    <th className="font-semibold text-center col-span-1">Estado</th>
                    <th className="font-semibold text-center col-span-1">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {contracts.map((contract) => (
                    <tr
                      key={contract.id}
                      className="grid grid-cols-10 gap-4 border-b-2 border-gray-300 px-1 py-2 rounded-md"
                    >
                      <td className="text-center col-span-1">{contract.id.toString().padStart(3, "0")}</td>
                      <td className="text-center col-span-2">{contract.employee}</td>
                      <td className="text-center col-span-1">{contract.company}</td>
                      <td className="text-center col-span-1">{contract.position}</td>
                      <td className="text-center col-span-1">{contract.salary}</td>
                      <td className="text-center col-span-1">{contract.startDate}</td>
                      <td className="text-center col-span-1">{contract.contractType}</td>
                      <td className="text-center col-span-1">{contract.status}</td>
                      <td className="flex gap-2 px-1 py-1">
                        <button className="bg-[#f83333] hover:bg-[#f54949] rounded-sm p-1 transition duration-200">
                          <Pencil className="h-4 w-4 text-white" />
                        </button>
                        <button className="bg-[#34c274] hover:bg-[#42d685] rounded-sm p-1 transition duration-200">
                          <Trash2 className="h-4 w-4 text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Nóminas Tab */}
          <TabsContent value="payroll" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Gestión de Nóminas</CardTitle>
                    <CardDescription>Supervisa todas las nóminas del sistema</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Exportar
                    </Button>
                    <Button>
                      <DollarSign className="h-4 w-4 mr-2" />
                      Procesar Nómina
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="bg-white shadow-sm border-b p-3">
              <div className="p-3">
                <CardTitle>Listado General de Nóminas</CardTitle>
                <CardDescription>Información de todas las nóminas procesadas</CardDescription>
              </div>
              <table className="m-1 mb-3 rounded-md shadow-sm text-sm">
                <thead className="bg-sky-100 border-b-2 border-gray-300 px-2 py-3">
                  <tr className="grid grid-cols-10 gap-4 px-2 py-3">
                    <th className="font-semibold text-center col-span-1">ID</th>
                    <th className="font-semibold text-center col-span-1">Empresa</th>
                    <th className="font-semibold text-center col-span-1">Período</th>
                    <th className="font-semibold text-center col-span-1">Empleados</th>
                    <th className="font-semibold text-center col-span-1">Total Bruto</th>
                    <th className="font-semibold text-center col-span-1">Descuentos</th>
                    <th className="font-semibold text-center col-span-1">Total Neto</th>
                    <th className="font-semibold text-center col-span-1">Estado</th>
                    <th className="font-semibold text-center col-span-1">Comisión HG</th>
                    <th className="font-semibold text-center col-span-1">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {payrolls.map((payroll) => (
                    <tr
                      key={payroll.id}
                      className="grid grid-cols-10 gap-4 border-b-2 border-gray-300 px-1 py-2 rounded-md"
                    >
                      <td className="text-center col-span-1">{payroll.id.toString().padStart(3, "0")}</td>
                      <td className="text-center col-span-1">{payroll.company}</td>
                      <td className="text-center col-span-1">{payroll.month}</td>
                      <td className="text-center col-span-1">{payroll.employees}</td>
                      <td className="text-center col-span-1">{payroll.grossTotal}</td>
                      <td className="text-center col-span-1">{payroll.deductions}</td>
                      <td className="text-center col-span-1">{payroll.netTotal}</td>
                      <td className="text-center col-span-1">{payroll.status}</td>
                      <td className="text-center col-span-1">2%</td>
                      <td className="flex gap-2 px-1 py-1">
                        <button className="bg-[#f83333] hover:bg-[#f54949] rounded-sm p-1 transition duration-200">
                          <Pencil className="h-4 w-4 text-white" />
                        </button>
                        <button className="bg-[#34c274] hover:bg-[#42d685] rounded-sm p-1 transition duration-200">
                          <Trash2 className="h-4 w-4 text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
