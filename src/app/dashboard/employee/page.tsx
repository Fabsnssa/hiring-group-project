"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, Eye, FileText, DollarSign, Building2, User } from "lucide-react"
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function EmployeeDashboard() {
  const [selectedMonth, setSelectedMonth] = useState("")
  const [selectedYear, setSelectedYear] = useState("")

  const payrollRecords = [
    { id: 1, month: "Enero", year: "2024", grossSalary: 1200, deductions: 78, netSalary: 1122, status: "Pagado" },
    { id: 2, month: "Diciembre", year: "2023", grossSalary: 1200, deductions: 78, netSalary: 1122, status: "Pagado" },
    { id: 3, month: "Noviembre", year: "2023", grossSalary: 1200, deductions: 78, netSalary: 1122, status: "Pagado" },
    { id: 4, month: "Octubre", year: "2023", grossSalary: 1200, deductions: 78, netSalary: 1122, status: "Pagado" },
  ]

  const availableJobs = [
    {
      id: 1,
      title: "Desarrollador Frontend Senior",
      company: "TechCorp",
      location: "Caracas",
      salary: "$1,500",
      description: "Posición senior para desarrollador con experiencia",
    },
    {
      id: 2,
      title: "Analista de Sistemas",
      company: "DataCorp",
      location: "Valencia",
      salary: "$1,300",
      description: "Analista para proyectos de transformación digital",
    },
    {
      id: 3,
      title: "Líder Técnico",
      company: "InnovaTech",
      location: "Maracaibo",
      salary: "$1,800",
      description: "Liderazgo técnico en proyectos de software",
    },
  ]

  const employeeInfo = {
    name: "Carlos Rodríguez",
    position: "Desarrollador Frontend",
    company: "TechCorp Solutions",
    startDate: "2023-03-15",
    monthlySalary: 1200,
    contractType: "Indefinido",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Panel Empleado</h1>
              <p className="text-sm text-gray-600">
                {employeeInfo.name} - {employeeInfo.position}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">carlos.rodriguez@email.com</span>
              <Button variant="outline" size="sm">
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Employee Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Información del Empleado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600">Empresa</p>
                <p className="font-semibold">{employeeInfo.company}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Cargo</p>
                <p className="font-semibold">{employeeInfo.position}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Fecha de Ingreso</p>
                <p className="font-semibold">{employeeInfo.startDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Salario Mensual</p>
                <p className="font-semibold text-green-600">${employeeInfo.monthlySalary}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Tipo de Contrato</p>
                <p className="font-semibold">{employeeInfo.contractType}</p>
              </div>
              <div className="flex items-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <FileText className="h-4 w-4 mr-2" />
                      Solicitar Constancia
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Constancia de Trabajo</DialogTitle>
                      <DialogDescription>Previsualización de tu constancia de trabajo</DialogDescription>
                    </DialogHeader>
                    <div className="bg-white p-8 border rounded-lg">
                      <div className="text-center mb-8">
                        <h2 className="text-xl font-bold">HIRING GROUP</h2>
                        <p className="text-sm text-gray-600">Sistema de Gestión de Personal</p>
                      </div>

                      <div className="space-y-4 text-sm">
                        <p className="text-center font-bold">A QUIEN PUEDA INTERESAR</p>

                        <p className="text-justify">
                          Por medio de la presente la empresa <strong>HIRING GROUP</strong> hace constar que el
                          ciudadano(a)
                          <strong> {employeeInfo.name}</strong>, labora con nosotros desde
                          <strong> {employeeInfo.startDate}</strong>, cumpliendo funciones en el cargo de
                          <strong> {employeeInfo.position}</strong> en la empresa
                          <strong> {employeeInfo.company}</strong>, devengando un salario mensual de
                          <strong> ${employeeInfo.monthlySalary}</strong>
                        </p>

                        <p className="text-justify">
                          Constancia que se pide por la parte interesada en la ciudad de Puerto Ordaz en fecha
                          <strong> {new Date().toLocaleDateString()}</strong>
                        </p>
                      </div>

                      <div className="mt-8 text-center">
                        <div className="border-t border-gray-300 w-48 mx-auto mt-16 pt-2">
                          <p className="text-sm">Firma Autorizada</p>
                          <p className="text-xs text-gray-600">Hiring Group</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cerrar</Button>
                      <Button>
                        <Download className="h-4 w-4 mr-2" />
                        Descargar PDF
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="payroll" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="payroll">Recibos de Pago</TabsTrigger>
            <TabsTrigger value="jobs">Ofertas Disponibles</TabsTrigger>
            <TabsTrigger value="form">Ingreso de datos</TabsTrigger>
          </TabsList>

          <TabsContent value="payroll" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Historial de Recibos de Pago</CardTitle>
                    <CardDescription>Consulta y descarga tus recibos de pago</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Mes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enero">Enero</SelectItem>
                        <SelectItem value="febrero">Febrero</SelectItem>
                        <SelectItem value="marzo">Marzo</SelectItem>
                        <SelectItem value="abril">Abril</SelectItem>
                        <SelectItem value="mayo">Mayo</SelectItem>
                        <SelectItem value="junio">Junio</SelectItem>
                        <SelectItem value="julio">Julio</SelectItem>
                        <SelectItem value="agosto">Agosto</SelectItem>
                        <SelectItem value="septiembre">Septiembre</SelectItem>
                        <SelectItem value="octubre">Octubre</SelectItem>
                        <SelectItem value="noviembre">Noviembre</SelectItem>
                        <SelectItem value="diciembre">Diciembre</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="Año" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {payrollRecords.map((record) => (
                    <div key={record.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-semibold">
                            {record.month} {record.year}
                          </h3>
                          <Badge variant="default">{record.status}</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Salario Bruto</p>
                            <p className="font-medium text-green-600">${record.grossSalary}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Descuentos</p>
                            <p className="font-medium text-red-600">-${record.deductions}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Salario Neto</p>
                            <p className="font-medium text-blue-600">${record.netSalary}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ofertas Laborales Disponibles</CardTitle>
                <CardDescription>
                  Visualiza las ofertas disponibles (no puedes postularte mientras estés contratado)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableJobs.map((job) => (
                    <div key={job.id} className="border rounded-lg p-6 opacity-75">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <p className="text-gray-600">{job.company}</p>
                        </div>
                        <Badge variant="secondary">Solo visualización</Badge>
                      </div>

                      <p className="text-gray-700 mb-4">{job.description}</p>

                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                  ))}
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
