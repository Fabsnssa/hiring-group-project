"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Building2, FileText, DollarSign, Filter, Plus, Eye, Edit, Trash2 } from "lucide-react"
import { Label } from "@radix-ui/react-label"
import { Textarea } from "@/components/ui/textarea"

export default function HiringGroupDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const mockJobs = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      company: "TechCorp",
      salary: "$1,200",
      applications: 15,
      status: "Activa",
    },
    { id: 2, title: "Contador Senior", company: "FinanceInc", salary: "$1,500", applications: 8, status: "Activa" },
    {
      id: 3,
      title: "Diseñador UX/UI",
      company: "CreativeStudio",
      salary: "$1,100",
      applications: 22,
      status: "Inactiva",
    },
  ]

  const mockCompanies = [
    { id: 1, name: "TechCorp", sector: "Tecnología", contact: "Juan Pérez", activeJobs: 3 },
    { id: 2, name: "FinanceInc", sector: "Finanzas", contact: "María García", activeJobs: 2 },
    { id: 3, name: "CreativeStudio", sector: "Diseño", contact: "Carlos López", activeJobs: 1 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Panel Hiring Group</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Usuario: Admin HG</span>
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
              <CardTitle className="text-sm font-medium">Empresas Activas</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ofertas Activas</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87</div>
              <p className="text-xs text-muted-foreground">+12 esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Postulaciones</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">+45 hoy</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Empleados Activos</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+8 este mes</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="jobs">Ofertas Laborales</TabsTrigger>
            <TabsTrigger value="companies">Empresas</TabsTrigger>
            <TabsTrigger value="applications">Postulaciones</TabsTrigger>
            <TabsTrigger value="payroll">Nómina</TabsTrigger>
            <TabsTrigger value="reports">Reportes</TabsTrigger>
            <TabsTrigger value="form">Ingreso de datos</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Gestión de Ofertas Laborales</CardTitle>
                    <CardDescription>Administra todas las ofertas de trabajo del sistema</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Nueva Oferta
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="flex-1">
                    <Input
                      placeholder="Buscar ofertas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="max-w-sm"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </div>

                <div className="space-y-4">
                  {mockJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-gray-600">{job.company}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm font-medium">{job.salary}</span>
                          <span className="text-sm text-gray-500">{job.applications} postulaciones</span>
                          <Badge variant={job.status === "Activa" ? "default" : "secondary"}>{job.status}</Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="companies" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Gestión de Empresas</CardTitle>
                    <CardDescription>Administra los perfiles de empresas clientes</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Nueva Empresa
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCompanies.map((company) => (
                    <div key={company.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{company.name}</h3>
                        <p className="text-sm text-gray-600">Sector: {company.sector}</p>
                        <p className="text-sm text-gray-600">Contacto: {company.contact}</p>
                        <span className="text-sm text-blue-600">{company.activeJobs} ofertas activas</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payroll" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Nómina</CardTitle>
                <CardDescription>Administra las nóminas mensuales por empresa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Preparar Nómina</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Generar Nómina del Mes</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ejecutar Nómina</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-transparent" variant="outline">
                        Procesar Pagos
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="form" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ingreso de Datos</CardTitle>
                <CardDescription>Formulario personalizado para ingreso de información "CRUD"</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="extra-field1">Campo Extra 1</Label>
                    <Input id="extra-field1" placeholder="Ej: Nombre del Proyecto" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="extra-field2">Campo Extra 2</Label>
                    <Input id="extra-field2" placeholder="Ej: Responsable" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="details">Detalles Adicionales</Label>
                  <Textarea id="details" placeholder="Descripción o notas relevantes..." rows={4} />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancelar</Button>
                  <Button>Guardar Datos</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
