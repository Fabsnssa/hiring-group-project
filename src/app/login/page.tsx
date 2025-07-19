"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2 } from "lucide-react"

export default function LoginPage() {
  const [userType, setUserType] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Building2 className="h-12 w-12 text-blue-600" />
          </div>
          <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
          <CardDescription>Accede a tu cuenta de Hiring Group</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="userType">Tipo de Usuario</Label>
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona tu tipo de usuario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administrador</SelectItem>
                <SelectItem value="hiring-group">Usuario Hiring Group</SelectItem>
                <SelectItem value="company">Usuario Empresa</SelectItem>
                <SelectItem value="candidate">Postulante/Candidato</SelectItem>
                <SelectItem value="employee">Usuario Contratado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" placeholder="tu@email.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" />
          </div>

          <Button className="w-full" disabled={!userType}>
            Iniciar Sesión
          </Button>

          {/* <div className="text-center text-sm">
            <Link href="/forgot-password" className="text-blue-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div> */}

          <div className="text-center text-sm">
            ¿No tienes cuenta?{" "}
            <Link href="/register/candidate" className="text-blue-600 hover:underline">
              Regístrate como candidato
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
