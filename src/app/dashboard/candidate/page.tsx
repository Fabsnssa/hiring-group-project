"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, DollarSign, Calendar, User, Briefcase, Plus, Edit, Trash2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export default function CandidateDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState("")
  const [selectedState, setSelectedState] = useState("")

  const availableJobs = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      company: "TechCorp",
      location: "Caracas",
      salary: "$1,200",
      profession: "Ingeniería en Sistemas",
      description: "Desarrollador con experiencia en React",
      posted: "2024-01-15",
    },
    {
      id: 2,
      title: "Diseñador UX/UI",
      company: "CreativeStudio",
      location: "Valencia",
      salary: "$1,100",
      profession: "Diseño Gráfico",
      description: "Diseñador con experiencia en interfaces",
      posted: "2024-01-14",
    },
    {
      id: 3,
      title: "Contador Senior",
      company: "FinanceInc",
      location: "Maracaibo",
      salary: "$1,500",
      profession: "Contaduría",
      description: "Contador con experiencia en NIIF",
      posted: "2024-01-13",
    },
  ]

  const myApplications = [
    {
      id: 1,
      jobTitle: "Desarrollador Frontend",
      company: "TechCorp",
      appliedDate: "2024-01-16",
      status: "En revisión",
    },
    {
      id: 2,
      jobTitle: "Analista de Sistemas",
      company: "DataCorp",
      appliedDate: "2024-01-14",
      status: "Entrevista programada",
    },
    { id: 3, jobTitle: "Programador Junior", company: "StartupXYZ", appliedDate: "2024-01-12", status: "Rechazada" },
  ]

  const experiences = [
    { id: 1, company: "Empresa ABC", position: "Desarrollador Junior", startDate: "2022-01-01", endDate: "2023-12-31" },
    { id: 2, company: "Consultora XYZ", position: "Practicante", startDate: "2021-06-01", endDate: "2021-12-31" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Panel Candidato</h1>
              <p className="text-sm text-gray-600">María González - Ingeniera en Sistemas</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">maria.gonzalez@email.com</span>
              <Button variant="outline" size="sm">
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Postulaciones Activas</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {myApplications.filter((app) => app.status !== "Rechazada").length}
              </div>
              <p className="text-xs text-muted-foreground">de {myApplications.length} totales</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ofertas Disponibles</CardTitle>
              <Search className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{availableJobs.length}</div>
              <p className="text-xs text-muted-foreground">en tu área de interés</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Perfil Completado</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">añade más experiencias</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="jobs">Buscar Empleos</TabsTrigger>
            <TabsTrigger value="applications">Mis Postulaciones</TabsTrigger>
            <TabsTrigger value="profile">Mi Perfil</TabsTrigger>
            <TabsTrigger value="form">Ingreso de datos</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ofertas de Empleo Disponibles</CardTitle>
                <CardDescription>Encuentra oportunidades laborales que se ajusten a tu perfil</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="space-y-2">
                    <Label>Buscar por título</Label>
                    <Input
                      placeholder="Ej: Desarrollador, Contador..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Área de Conocimiento</Label>
                    <Select value={selectedArea} onValueChange={setSelectedArea}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar área" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sistemas">Ingeniería en Sistemas</SelectItem>
                        <SelectItem value="contaduria">Contaduría</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="diseno">Diseño Gráfico</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Estado</Label>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="caracas">Caracas</SelectItem>
                        <SelectItem value="valencia">Valencia</SelectItem>
                        <SelectItem value="maracaibo">Maracaibo</SelectItem>
                        <SelectItem value="barquisimeto">Barquisimeto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Job Listings */}
                <div className="space-y-4">
                  {availableJobs.map((job) => (
                    <div key={job.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <p className="text-gray-600">{job.company}</p>
                        </div>
                        <Badge variant="outline">{job.profession}</Badge>
                      </div>

                      <p className="text-gray-700 mb-4">{job.description}</p>

                      <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Publicado: {job.posted}
                        </div>
                      </div>

                      <Button>Postularme</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mis Postulaciones</CardTitle>
                <CardDescription>Seguimiento de todas tus aplicaciones laborales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myApplications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{application.jobTitle}</h3>
                        <p className="text-sm text-gray-600">{application.company}</p>
                        <p className="text-sm text-gray-500">Aplicado: {application.appliedDate}</p>
                      </div>
                      <Badge
                        variant={
                          application.status === "En revisión"
                            ? "default"
                            : application.status === "Entrevista programada"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {application.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid gap-6">
              {/* Basic Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Información Personal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input id="name" value="María González" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" value="maria.gonzalez@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" value="+58 412-1234567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="university">Universidad</Label>
                      <Input id="university" value="Universidad Central de Venezuela" />
                    </div>
                  </div>
                  <Button>Actualizar Información</Button>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Experiencia Laboral</CardTitle>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Agregar
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Agregar Experiencia Laboral</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="exp-company">Empresa</Label>
                            <Input id="exp-company" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="exp-position">Cargo</Label>
                            <Input id="exp-position" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="exp-start">Fecha de Inicio</Label>
                              <Input id="exp-start" type="date" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="exp-end">Fecha de Fin</Label>
                              <Input id="exp-end" type="date" />
                            </div>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline">Cancelar</Button>
                            <Button>Guardar</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {experiences.map((exp) => (
                      <div key={exp.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{exp.position}</h3>
                          <p className="text-sm text-gray-600">{exp.company}</p>
                          <p className="text-sm text-gray-500">
                            {exp.startDate} - {exp.endDate}
                          </p>
                        </div>
                        <div className="flex gap-2">
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
            </div>
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
