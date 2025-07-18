"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Eye, Users, FileText, Settings } from "lucide-react"

export default function CompanyDashboard() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Desarrollador Frontend",
      profession: "Ingeniería en Sistemas",
      salary: "$1,200",
      applications: 15,
      status: "Activa",
      description: "Desarrollador con experiencia en React y TypeScript",
    },
    {
      id: 2,
      title: "Analista de Marketing",
      profession: "Marketing",
      salary: "$1,000",
      applications: 8,
      status: "Activa",
      description: "Profesional en marketing digital y redes sociales",
    },
    {
      id: 3,
      title: "Contador Junior",
      profession: "Contaduría",
      salary: "$900",
      applications: 12,
      status: "Inactiva",
      description: "Contador con conocimientos en NIIF",
    },
  ])

  const toggleJobStatus = (id: number) => {
    setJobs(
      jobs.map((job) => (job.id === id ? { ...job, status: job.status === "Activa" ? "Inactiva" : "Activa" } : job)),
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Panel Empresa</h1>
              <p className="text-sm text-gray-600">TechCorp Solutions</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Usuario: admin@techcorp.com</span>
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
              <CardTitle className="text-sm font-medium">Total Postulaciones</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{jobs.reduce((sum, job) => sum + job.applications, 0)}</div>
              <p className="text-xs text-muted-foreground">candidatos interesados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Promedio por Oferta</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(jobs.reduce((sum, job) => sum + job.applications, 0) / jobs.length)}
              </div>
              <p className="text-xs text-muted-foreground">postulaciones por oferta</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="jobs">Gestión de Ofertas</TabsTrigger>
            <TabsTrigger value="profile">Perfil de Empresa</TabsTrigger>
            <TabsTrigger value="form">Ingreso de datos</TabsTrigger> {/*ejemplo para formmulario, sino lo hacemos como botón*/}
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Mis Ofertas Laborales</CardTitle>
                    <CardDescription>Crea, modifica y gestiona tus ofertas de trabajo</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Nueva Oferta
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Crear Nueva Oferta</DialogTitle>
                        <DialogDescription>
                          Completa la información para publicar una nueva oferta laboral
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="profession">Profesión</Label>
                            <Input id="profession" placeholder="Ej: Ingeniería en Sistemas" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="position">Cargo Vacante</Label>
                            <Input id="position" placeholder="Ej: Desarrollador Frontend" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="salary">Salario Ofrecido</Label>
                          <Input id="salary" placeholder="Ej: $1,200" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">Descripción del Perfil</Label>
                          <Textarea
                            id="description"
                            placeholder="Describe los requisitos y responsabilidades del cargo..."
                            rows={4}
                          />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline">Cancelar</Button>
                          <Button>Publicar Oferta</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{job.title}</h3>
                          <Badge variant={job.status === "Activa" ? "default" : "secondary"}>{job.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Profesión: {job.profession}</p>
                        <p className="text-sm text-gray-600 mb-2">{job.description}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium text-green-600">{job.salary}</span>
                          <span className="text-sm text-blue-600">{job.applications} postulaciones</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant={job.status === "Activa" ? "destructive" : "default"}
                          onClick={() => toggleJobStatus(job.id)}
                        >
                          {job.status === "Activa" ? "Desactivar" : "Activar"}
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

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Perfil de la Empresa</CardTitle>
                <CardDescription>Información básica de tu empresa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Nombre de la Empresa</Label>
                    <Input id="company-name" value="TechCorp Solutions" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sector">Sector</Label>
                    <Input id="sector" value="Tecnología" readOnly />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-person">Persona de Contacto</Label>
                    <Input id="contact-person" value="Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email de Contacto</Label>
                    <Input id="contact-email" value="admin@techcorp.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nueva Contraseña</Label>
                  <Input id="new-password" type="password" placeholder="Dejar en blanco para mantener actual" />
                </div>
                <Button>
                  <Settings className="h-4 w-4 mr-2" />
                  Actualizar Perfil
                </Button>
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
