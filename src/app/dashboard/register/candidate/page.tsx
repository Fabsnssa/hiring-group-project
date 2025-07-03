"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { User } from "lucide-react"

export default function CandidateRegister() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <User className="h-12 w-12 text-blue-600" />
          </div>
          <CardTitle className="text-2xl">Registro de Candidato</CardTitle>
          <CardDescription>Crea tu perfil profesional para encontrar oportunidades laborales</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Información Personal</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" placeholder="Tu apellido" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" placeholder="+58 412-1234567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                <Input id="confirmPassword" type="password" />
              </div>

              <Button className="w-full" onClick={() => setStep(2)}>
                Continuar
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Información Académica</h3>

              <div className="space-y-2">
                <Label htmlFor="profession">Profesión</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu profesión" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sistemas">Ingeniería en Sistemas</SelectItem>
                    <SelectItem value="industrial">Ingeniería Industrial</SelectItem>
                    <SelectItem value="contaduria">Contaduría Pública</SelectItem>
                    <SelectItem value="administracion">Administración</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="diseno">Diseño Gráfico</SelectItem>
                    <SelectItem value="derecho">Derecho</SelectItem>
                    <SelectItem value="medicina">Medicina</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="university">Universidad de Egreso</Label>
                <Input id="university" placeholder="Nombre de tu universidad" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="graduationYear">Año de Graduación</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el año" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2019">2019</SelectItem>
                    <SelectItem value="2018">2018</SelectItem>
                    <SelectItem value="2017">2017</SelectItem>
                    <SelectItem value="2016">2016</SelectItem>
                    <SelectItem value="2015">2015</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Anterior
                </Button>
                <Button className="flex-1" onClick={() => setStep(3)}>
                  Continuar
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Experiencia Laboral (Opcional)</h3>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" placeholder="Nombre de la empresa" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Cargo</Label>
                <Input id="position" placeholder="Tu cargo en la empresa" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Fecha de Inicio</Label>
                  <Input id="startDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">Fecha de Fin</Label>
                  <Input id="endDate" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción de Funciones</Label>
                <Textarea id="description" placeholder="Describe brevemente tus funciones y logros..." rows={3} />
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Anterior
                </Button>
                <Button className="flex-1">Completar Registro</Button>
              </div>

              <p className="text-sm text-center text-gray-600">Podrás agregar más experiencias después del registro</p>
            </div>
          )}

          <div className="mt-6 text-center text-sm">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Iniciar sesión
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
