"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Building2 } from "lucide-react"

export default function CompanyRegister() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Building2 className="h-12 w-12 text-blue-600" />
          </div>
          <CardTitle className="text-2xl">Registro de Empresa</CardTitle>
          <CardDescription>Registra tu empresa para acceder a nuestros servicios de reclutamiento</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nombre de la Empresa</Label>
              <Input id="companyName" placeholder="Nombre completo de la empresa" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rif">RIF</Label>
              <Input id="rif" placeholder="J-12345678-9" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sector">Sector Empresarial</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tecnologia">Tecnología</SelectItem>
                <SelectItem value="finanzas">Finanzas</SelectItem>
                <SelectItem value="salud">Salud</SelectItem>
                <SelectItem value="educacion">Educación</SelectItem>
                <SelectItem value="manufactura">Manufactura</SelectItem>
                <SelectItem value="comercio">Comercio</SelectItem>
                <SelectItem value="servicios">Servicios</SelectItem>
                <SelectItem value="construccion">Construcción</SelectItem>
                <SelectItem value="turismo">Turismo</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Dirección</Label>
            <Textarea id="address" placeholder="Dirección completa de la empresa" rows={2} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactName">Persona de Contacto</Label>
              <Input id="contactName" placeholder="Nombre del responsable" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPosition">Cargo</Label>
              <Input id="contactPosition" placeholder="Gerente de RRHH" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email de Contacto</Label>
              <Input id="contactEmail" type="email" placeholder="contacto@empresa.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Teléfono</Label>
              <Input id="contactPhone" placeholder="+58 212-1234567" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción de la Empresa</Label>
            <Textarea
              id="description"
              placeholder="Breve descripción de la empresa, sus actividades y cultura organizacional..."
              rows={3}
            />
          </div>

          {/* <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Información Importante</h4>
            <p className="text-sm text-blue-800">
              Una vez enviada tu solicitud, el equipo de Hiring Group revisará la información y te contactará para
              completar el proceso de registro. Recibirás las credenciales de acceso por correo electrónico.
            </p>
          </div> */}

          <Button className="w-full">Enviar Solicitud de Registro</Button>

          <div className="text-center text-sm">
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
